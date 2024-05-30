import waterfallCss from "@/assets/style/waterfall.module.scss";
import { WATERFALL_PROPS } from "@/type/propsInterface";

function Waterfall(props: WATERFALL_PROPS) {
  const { children, column } = props;

  const itemWidth = () => {
    const container = document.querySelector("#waterfall");
    return container.clientWidth / children.length;
  };

  const createLi = (children: any) => {
    return (
      children?.map((item: any, index: number) => {
        return (
          <li key={item?.id ?? index} className={waterfallCss.li}>
            {item}
          </li>
        );
      }) ?? []
    );
  };

  return (
    <ul className={waterfallCss.container} id="waterfall">
      {createLi(children)}
    </ul>
  );
}

export default Waterfall;
