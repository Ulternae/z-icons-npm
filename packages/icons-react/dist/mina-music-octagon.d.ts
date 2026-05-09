import React from 'react';

export interface MinaMusicOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusicOctagon: React.FC<MinaMusicOctagonProps>;
export default MinaMusicOctagon;
