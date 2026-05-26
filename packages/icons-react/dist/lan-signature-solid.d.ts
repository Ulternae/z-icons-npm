import React from 'react';

export interface LanSignatureSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignatureSolid: React.FC<LanSignatureSolidProps>;
export default LanSignatureSolid;
