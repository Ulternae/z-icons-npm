import React from 'react';

export interface MinaNineOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNineOctagon: React.FC<MinaNineOctagonProps>;
export default MinaNineOctagon;
