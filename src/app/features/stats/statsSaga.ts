import { call, put, takeLatest } from "redux-saga/effects";
import { fetchStats, fetchStatsSuccess, fetchStatsFailure } from "./statsSlice";
import { getStatsOverview } from "../../../services/api";
import type { Stats } from "./statsSlice";

function* handleFetchStats() {
  try {
    const data: Stats = yield call(getStatsOverview);
    yield put(fetchStatsSuccess(data));
  } catch (error) {
    yield put(fetchStatsFailure((error as Error).message));
  }
}

export function* statsSaga() {
  yield takeLatest(fetchStats.type, handleFetchStats);
}
