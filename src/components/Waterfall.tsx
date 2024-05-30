// @ts-nocheck
import waterfallCss from "@/assets/style/waterfall.module.scss";
import { WATERFALL_PROPS } from "@/type/propsInterface";
import { useEffect, useRef, useState } from "react";

function Waterfall(props: WATERFALL_PROPS) {
  const { children, column, gap } = props;
  const [list, setList] = useState([]);
  const containerRef = useRef();
  const createLi = (children: any) => {
    const list =
      children?.map((item: any, index: number) => {
        return (
          <li
            key={item?.id ?? index}
            className={waterfallCss.li}
            id={"_waterfall_li" + index}
          >
            {item}
          </li>
        );
      }) ?? [];
    setList(list);
    return list;
  };

  const adaptStyle = (): void => {
    adaptGridTempColumn();
    adaptColumnGap();
    adaptGridRowEnd();
  };

  const adaptGridTempColumn = () => {
    containerRef?.current?.style.setProperty(
      "--grid-template-column",
      column || 3
    );
  };

  const adaptColumnGap = () => {
    containerRef?.current?.style.setProperty("--column-gap", gap || 0);
  };

  const adaptGridRowEnd = () => {
    for (let i = 0; i < list.length; i++) {
      const li = document.querySelector(`#_waterfall_li${i}`);
      if (!li) {
        continue;
      }
      li.style.setProperty(
        "--grid-row-end",
        `${~~(Math.round(li.clientHeight) / 10)}`
      );
    }
  };

  // 模拟mounted的生命周期
  useEffect(() => {
    createLi(children);
  }, []);

  // 模拟update生命周期
  useEffect(() => {
    adaptStyle();
  });

  return (
    <ul className={waterfallCss.container} ref={containerRef}>
      {list}
    </ul>
  );
}

export default Waterfall;
