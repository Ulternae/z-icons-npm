import React from 'react';

export interface MinaDotsVerticalOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVerticalOctagon: React.FC<MinaDotsVerticalOctagonProps>;
export default MinaDotsVerticalOctagon;
