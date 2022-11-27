import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）
import styled from "@emotion/styled";

const SlideImage = styled("img")`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type ReactSplideProps = {
  slideList: slideItem[];
};
type slideItem = {
  index: number;
  title: string;
  imgSrc: string;
  imgAlt: string;
};

export const ReactSplide: React.FC<ReactSplideProps> = ({ slideList }) => {
  return (
    <Splide
      aria-label="私のお気に入りの画像集"
      options={{
        type: "loop",
        speed: 600,
        padding: "20%",
        perPage: 2,
        perMove: 1,
        wheel: true,
        releaseWheel: true,
        trimSpace: false,
        focus: "center",
        updateOnMove: false,
        gap: 30,
        breakpoints: {
          500: {
            destroy: true,
          },
        },
      }}
    >
      {slideList.map((slideItem) => (
        <SplideSlide key={slideItem.index}>
          <SlideImage
            src={slideItem.imgSrc}
            alt={slideItem.imgAlt}
            height={300}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};
