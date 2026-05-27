import React from 'react';

export interface NeoArrowsRotateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoArrowsRotateSolid: React.FC<NeoArrowsRotateSolidProps>;
export default NeoArrowsRotateSolid;
