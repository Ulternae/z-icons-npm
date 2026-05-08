import React from 'react';

export interface MinaTwoOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwoOctagon: React.FC<MinaTwoOctagonProps>;
export default MinaTwoOctagon;
