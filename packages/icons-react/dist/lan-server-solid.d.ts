import React from 'react';

export interface LanServerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanServerSolid: React.FC<LanServerSolidProps>;
export default LanServerSolid;
