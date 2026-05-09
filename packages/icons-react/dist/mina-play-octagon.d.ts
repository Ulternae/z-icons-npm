import React from 'react';

export interface MinaPlayOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlayOctagon: React.FC<MinaPlayOctagonProps>;
export default MinaPlayOctagon;
