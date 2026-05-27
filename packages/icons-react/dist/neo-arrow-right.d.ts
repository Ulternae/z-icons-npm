import React from 'react';

export interface NeoArrowRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoArrowRight: React.FC<NeoArrowRightProps>;
export default NeoArrowRight;
