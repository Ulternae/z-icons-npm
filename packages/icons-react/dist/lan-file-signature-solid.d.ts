import React from 'react';

export interface LanFileSignatureSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSignatureSolid: React.FC<LanFileSignatureSolidProps>;
export default LanFileSignatureSolid;
