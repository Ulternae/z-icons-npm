import React from 'react';

export interface LanStoreLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreLockSolid: React.FC<LanStoreLockSolidProps>;
export default LanStoreLockSolid;
