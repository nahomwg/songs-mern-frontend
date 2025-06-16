import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSong,
  updateSong,
  deleteSong,
  type Song,
} from "./songsSlice";
import {
  getAllSongsAPI,
  addSongAPI,
  updateSongAPI,
  deleteSongAPI,
} from "../../../services/api";
import { fetchStats } from "../stats/statsSlice";

function* handleFetchSongs() {
  try {
    const songs: Song[] = yield call(getAllSongsAPI);
    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure((error as Error).message));
  }
}

function* handleAddSong(action: { type: string; payload: Omit<Song, "_id"> }) {
  try {
    const newSong: Song = yield call(addSongAPI, action.payload);
    yield put(addSong(newSong));
    yield put(fetchStats()); // Trigger stats refresh after song added
  } catch (error) {
    console.error(error);
  }
}

function* handleUpdateSong(action: {
  type: string;
  payload: { id: string; data: Omit<Song, "_id"> };
}) {
  try {
    const updated: Song = yield call(
      updateSongAPI,
      action.payload.id,
      action.payload.data
    );
    yield put(updateSong(updated));
    yield put(fetchStats()); // Trigger stats refresh after song updated
  } catch (error) {
    console.error(error);
  }
}

function* handleDeleteSong(action: { type: string; payload: string }) {
  try {
    yield call(deleteSongAPI, action.payload);
    yield put(deleteSong(action.payload));
    yield put(fetchStats()); // Trigger stats refresh after song deleted
  } catch (error) {
    console.error(error);
  }
}

export function* songsSaga() {
  yield takeLatest(fetchSongs.type, handleFetchSongs);
  yield takeLatest("songs/addSongRequest", handleAddSong);
  yield takeLatest("songs/updateSongRequest", handleUpdateSong);
  yield takeLatest("songs/deleteSongRequest", handleDeleteSong);
}
