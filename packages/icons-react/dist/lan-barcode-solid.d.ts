import React from 'react';

export interface LanBarcodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeSolid: React.FC<LanBarcodeSolidProps>;
export default LanBarcodeSolid;
