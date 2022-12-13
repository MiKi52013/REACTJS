import actionTypes from './actionTypes';
import {
    getAllCodeService, createNewUserService,
    getAllUsers, deleteUserService, editUserService, getTopDoctorHomeService,
} from "../../services/userService";
import { toast } from 'react-toastify';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccsess(res.data))
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart error: ', e)
        }
    }
}
export const fetchGenderSuccsess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCSESS,
    data: genderData,
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccsess(res.data))
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPositionStart error: ', e)
        }
    }
}
export const fetchPositionSuccsess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCSESS,
    data: positionData,
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccsess(res.data))
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleStart error: ', e)
        }
    }
}
export const fetchRoleSuccsess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCSESS,
    data: roleData,
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            // console.log('check create user Redux: ', res)
            if (res && res.errCode === 0) {
                toast.success("Create a new user succeed !");
                dispatch(saveUserSuccsess(res.data));
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Create a  user error !");
                dispatch(saveUserFailed());
            }
        } catch (e) {
            toast.error("Create a  user error !");
            dispatch(saveUserFailed());
            console.log('saveUserFailed error: ', e)
        }
    }
}
export const saveUserSuccsess = () => ({
    type: actionTypes.SAVE_USER_SUCCSESS,
})
export const saveUserFailed = () => ({
    type: actionTypes.SAVE_USER_FAILED,
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccsess(res.users.reverse()))
            } else {
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
            dispatch(fetchAllUsersFailed());
            console.log('FetchAllUsersFailed error: ', e)
        }
    }
}
export const fetchAllUsersSuccsess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCSESS,
    users: data
})
export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            // console.log('check create user Redux: ', res)
            if (res && res.errCode === 0) {
                toast.success("Delete a user succeed !");
                dispatch(deleteUserSuccsess(res.data));
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Delete a user error !");
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            toast.error("Delete a user error !");
            dispatch(deleteUserFailed());
            console.log('deleteUserFailed error: ', e)
        }
    }
}
export const deleteUserSuccsess = () => ({
    type: actionTypes.DELETE_USER_SUCCSESS,
})
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            //hàm editUserService bên 
            if (res && res.errCode === 1) {
                //1 theo định nghĩa bên NodeJS: userService
                toast.success("Update the user succeed !");
                dispatch(editUserSuccsess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Update the user error !");
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error("Update the user error !");
            dispatch(editUserFailed());
            console.log('editUserFailed error: ', e)
        }
    }
}
export const editUserSuccsess = () => ({
    type: actionTypes.EDIT_USER_SUCCSESS,
})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED,
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService(3);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCSESS,
                    dataDoctors: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
            })
        }
    }
}
