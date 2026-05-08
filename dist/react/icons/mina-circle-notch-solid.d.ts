import React from 'react';

export interface MinaCircleNotchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCircleNotchSolid: React.FC<MinaCircleNotchSolidProps>;
export default MinaCircleNotchSolid;
