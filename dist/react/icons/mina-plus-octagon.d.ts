import React from 'react';

export interface MinaPlusOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlusOctagon: React.FC<MinaPlusOctagonProps>;
export default MinaPlusOctagon;
