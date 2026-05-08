import React from 'react';

export interface MinaStopSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStopSquareSolid: React.FC<MinaStopSquareSolidProps>;
export default MinaStopSquareSolid;
