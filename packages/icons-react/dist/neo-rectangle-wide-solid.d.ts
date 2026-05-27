import React from 'react';

export interface NeoRectangleWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoRectangleWideSolid: React.FC<NeoRectangleWideSolidProps>;
export default NeoRectangleWideSolid;
