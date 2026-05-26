import React from 'react';

export interface LanFSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFSolid: React.FC<LanFSolidProps>;
export default LanFSolid;
