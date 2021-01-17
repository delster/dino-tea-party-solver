import { styled } from "twin.macro";

const Icon = styled.button(({ traitId, state }) => [
  `
  height: 40px;
  width: 35px;
  background-image: url(/trait-icons.webp);
  margin: 20px 0;`,
  traitId && `background-position-x: ${IDsToX[traitId]};`,
  (state === 'no') && `background-position-y: 40px;`,
  (state === 'yes') && `background-position-y: 80px;`,
]);

const IDsToX = {
  1: `0px`,
  2: `-34px`,
  3: `-69px`,
  4: `-103px`,
  5: `-136px`,
  6: `-172px`,
  7: `-207px`,
  8: `-242px`,
  9: `-277px`,
  10: `-311px`,
  11: `-345px`,
  12: `-379px`,
  13: `-414px`,
  14: `-448px`,
  15: `-482px`,
};

export default Icon;
