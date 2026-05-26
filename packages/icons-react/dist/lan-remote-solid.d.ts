import React from 'react';

export interface LanRemoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRemoteSolid: React.FC<LanRemoteSolidProps>;
export default LanRemoteSolid;
