import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostSaga(action) {
    try {
        const posts = yield call(api.fetchPosts);
        yield put(actions.getPosts.getPostSuccess(posts.data));
    } catch (err) {
        console.error(err);
        yield put(actions.getPosts.getPostFailure(err));
    }
}


function* mySaga() {
    yield takeLatest(actions.getPosts.getPostRequest, fetchPostSaga);
}

// generator function ES6

export default mySaga;