import {AiOutlineReload} from "react-icons/ai";
import {IconContext} from "react-icons";

const contentStyle = {
    backgroundColor: '#dedede',
    padding: '5px',
    margin: '0 auto',
    border: '1px solid #ccc',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '32px'
}

const reloadButton = ({ size, onClick }) => (
    <div style={contentStyle} onClick={() => onClick()}>
        <IconContext.Provider value={ {size} }>
            <AiOutlineReload/>
        </IconContext.Provider>
    </div>
)

export default reloadButton
