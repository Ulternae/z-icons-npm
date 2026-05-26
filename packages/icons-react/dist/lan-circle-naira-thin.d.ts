import React from 'react';

export interface LanCircleNairaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleNairaThin: React.FC<LanCircleNairaThinProps>;
export default LanCircleNairaThin;
