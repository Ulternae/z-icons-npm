import React from 'react';

export interface NeoRectangleVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoRectangleVerticalSolid: React.FC<NeoRectangleVerticalSolidProps>;
export default NeoRectangleVerticalSolid;
