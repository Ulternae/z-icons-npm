import React from 'react';

export interface MinaPauseOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPauseOctagon: React.FC<MinaPauseOctagonProps>;
export default MinaPauseOctagon;
