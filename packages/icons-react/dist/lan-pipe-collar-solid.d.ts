import React from 'react';

export interface LanPipeCollarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeCollarSolid: React.FC<LanPipeCollarSolidProps>;
export default LanPipeCollarSolid;
