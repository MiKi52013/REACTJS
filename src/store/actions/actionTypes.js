const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    //admin
    // ADMIN_LOGIN_SUCCESS: 'ADMIN_LOGIN_SUCCESS',
    // ADMIN_LOGIN_FAIL: 'ADMIN_LOGIN_FAIL',
    // PROCESS_LOGOUT: 'PROCESS_LOGOUT',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',

    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCSESS: 'FETCH_GENDER_SUCCSESS',
    FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',

    FETCH_POSITION_SUCCSESS: 'FETCH_POSITION_SUCCSESS',
    FETCH_POSITION_FAILED: 'FETCH_POSITION_FAILED',

    FETCH_ROLE_SUCCSESS: 'FETCH_ROLE_SUCCSESS',
    FETCH_ROLE_FAILED: 'FETCH_ROLE_FAILED',

    SAVE_USER_SUCCSESS: 'SAVE_USER_SUCCSESS',
    SAVE_USER_FAILED: 'SAVE_USER_FAILED',

    DELETE_USER_SUCCSESS: 'DELETE_USER_SUCCSESS',
    DELETE_USER_FAILED: 'DELETE_USER_FAILED',

    EDIT_USER_SUCCSESS: 'EDIT_USER_SUCCSESS',
    EDIT_USER_FAILED: 'EDIT_USER_FAILED',

    FETCH_ALL_USERS_SUCCSESS: 'FETCH_ALL_USERS_SUCCSESS',
    FETCH_ALL_USERS_FAILED: 'FETCH_ALL_USERS_FAILED',

    FETCH_TOP_DOCTORS_SUCCSESS: 'FETCH_TOP_DOCTORS_SUCCSESS',
    FETCH_TOP_DOCTORS_FAILED: 'FETCH_TOP_DOCTORS_FAILED',
})

export default actionTypes;