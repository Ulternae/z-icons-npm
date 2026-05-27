import React from 'react';

export interface NeoArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoArrowDown: React.FC<NeoArrowDownProps>;
export default NeoArrowDown;
