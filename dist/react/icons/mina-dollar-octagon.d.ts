import React from 'react';

export interface MinaDollarOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDollarOctagon: React.FC<MinaDollarOctagonProps>;
export default MinaDollarOctagon;
