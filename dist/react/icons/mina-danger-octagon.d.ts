import React from 'react';

export interface MinaDangerOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerOctagon: React.FC<MinaDangerOctagonProps>;
export default MinaDangerOctagon;
