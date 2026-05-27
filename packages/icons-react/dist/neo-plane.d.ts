import React from 'react';

export interface NeoPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPlane: React.FC<NeoPlaneProps>;
export default NeoPlane;
