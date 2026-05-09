import React from 'react';

export interface MinaCheckCircleOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckCircleOneSolid: React.FC<MinaCheckCircleOneSolidProps>;
export default MinaCheckCircleOneSolid;
