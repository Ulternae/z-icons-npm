import React from 'react';

export interface NeoArrowLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoArrowLeft: React.FC<NeoArrowLeftProps>;
export default NeoArrowLeft;
