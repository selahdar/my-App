import "./loadingPage.css"
function LoadingPage() {
    return(
        <div className="loadingPage">
            <p>لطفا چند لحظه صبر کنید...</p>
           <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> 
        </div>
    )
}
export default LoadingPage