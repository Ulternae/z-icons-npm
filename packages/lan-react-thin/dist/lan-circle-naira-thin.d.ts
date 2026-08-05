import React from 'react';

export interface LanCircleNairaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNairaThin(props: LanCircleNairaThinProps): React.ReactElement;
export default LanCircleNairaThin;
