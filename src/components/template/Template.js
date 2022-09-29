import TopBar from "../topbar/Topbar";

export default function Template({children}){
    return <div className="template">
        <TopBar />
        {children}
    </div>
}