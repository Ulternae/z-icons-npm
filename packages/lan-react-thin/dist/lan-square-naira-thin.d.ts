import React from 'react';

export interface LanSquareNairaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareNairaThin(props: LanSquareNairaThinProps): React.ReactElement;
export default LanSquareNairaThin;
