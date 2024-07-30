import useTotalSpent from "../../hooks/useTotalSpent";
import TopBar from "../topbar/TopBar";
const Bank = () => {
    const spent = useTotalSpent();
    
    return (
        <div>
            <TopBar/>
            <p>{spent}</p>
        </div>
    )
}

export default Bank;