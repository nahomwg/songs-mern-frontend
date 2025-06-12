import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchSongs, fetchSongsSuccess, fetchSongsFailure, type Song } from './songsSlice';
import { getAllSongs } from '../../../services/api';

// Worker Saga
function* handleFetchSongs() {
  try {
    const songs: Song[] = yield call(getAllSongs);
    yield put(fetchSongsSuccess(songs));
  } catch (err) {
    yield put(fetchSongsFailure((err as Error).message));
  }
}

// Watcher Saga
export function* songsSaga() {
  yield takeLatest(fetchSongs.type, handleFetchSongs);
}
