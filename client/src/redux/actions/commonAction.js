
import { SNACK_BAR_VARIETNS } from "../../utils/constants"
import { callSnackBar } from "./snackbarAction"



export const callApiAction = (asyncFun, onSuccess = () => { }, onError = () => { }, isFile = false) => {

    return async (dispatch, getState) => {
        try {


            const response = await asyncFun()
            if (response) {
                if (response?.response?.data?.error?.status == 400) {
                    onError(response.response.data.error.message)
                    return
                }else {
                    await onSuccess(response)
                }
            } else {
                if(response.errorMessage) {
                    onError(response.errorMessage)
                }
                else if(response.error) {
                    onError(response.error.message)
                }
                
                else{
                    dispatch(callSnackBar(response.message, SNACK_BAR_VARIETNS.error))
                    onError()
                }
            }


        } catch (e) {
            console.log(e)
            onError(e.message)
            dispatch(callSnackBar("OOPS! Something went wrong", SNACK_BAR_VARIETNS.error))
        }
    }


}