import {put, takeEvery, all} from 'redux-saga'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* incrementAsync(){
    yield delay(1000);
    yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync())
}

export default function* rootSaga(){
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}
