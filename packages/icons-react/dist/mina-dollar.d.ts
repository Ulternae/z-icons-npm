import React from 'react';

export interface MinaDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDollar: React.FC<MinaDollarProps>;
export default MinaDollar;
