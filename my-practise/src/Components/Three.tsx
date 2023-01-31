
type PanelProps = {collapsable:true; defaultCollapsable?: true} | {collapsable?:never;defaultCollapsable?:never}

export function Panel(props:PanelProps){
    return <h1>Hello</h1>
}

function DebugInApp(){
    return <Panel collapsable/>
}