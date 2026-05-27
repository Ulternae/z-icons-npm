import React from 'react';

export interface NeoArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoArrowUp: React.FC<NeoArrowUpProps>;
export default NeoArrowUp;
