import React from 'react';

export interface NeoRectangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoRectangleSolid: React.FC<NeoRectangleSolidProps>;
export default NeoRectangleSolid;
