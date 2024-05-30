
import waterfallCss from "@/assets/style/waterfall.module.scss";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
function Waterfall(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }){
	console.info(props.children)
	return <div className={waterfallCss.container}>
		{props.children}
	</div>
}

export default Waterfall