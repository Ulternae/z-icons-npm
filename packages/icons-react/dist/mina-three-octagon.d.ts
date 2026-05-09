import React from 'react';

export interface MinaThreeOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThreeOctagon: React.FC<MinaThreeOctagonProps>;
export default MinaThreeOctagon;
