import React from 'react';

export interface MinaArrowUpLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowUpLeft: React.FC<MinaArrowUpLeftProps>;
export default MinaArrowUpLeft;
