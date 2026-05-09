import React from 'react';

export interface MinaPercentageCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPercentageCircleSolid: React.FC<MinaPercentageCircleSolidProps>;
export default MinaPercentageCircleSolid;
