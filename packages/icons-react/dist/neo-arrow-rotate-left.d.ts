import React from 'react';

export interface NeoArrowRotateLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoArrowRotateLeft: React.FC<NeoArrowRotateLeftProps>;
export default NeoArrowRotateLeft;
