import React from 'react';

export interface MinaWindArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWindArrowDown: React.FC<MinaWindArrowDownProps>;
export default MinaWindArrowDown;
