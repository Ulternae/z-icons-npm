import React from 'react';

export interface LanFileLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileLockSolid: React.FC<LanFileLockSolidProps>;
export default LanFileLockSolid;
