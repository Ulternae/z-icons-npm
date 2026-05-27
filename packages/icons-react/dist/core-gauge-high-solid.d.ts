import React from 'react';

export interface CoreGaugeHighSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGaugeHighSolid: React.FC<CoreGaugeHighSolidProps>;
export default CoreGaugeHighSolid;
