import "./style.css"
function Header({allSelected, handleSelectAllChange ,buttonsDisabled , deleteItems}){



    return(
        <div className="header">

            <label htmlFor="selectInput" className="selectInput" >
                <input disabled={buttonsDisabled} onChange={handleSelectAllChange} id="selectInput" type="checkbox" />
                <span>{allSelected? "UNSELECT ALL":"SELECT All"} </span>
            </label>

            <button className="delete" disabled={buttonsDisabled} onClick={deleteItems}>{allSelected?"DELETE ALL":"DELETE SELECTED"}</button>

        </div>
    )

}
export default Header