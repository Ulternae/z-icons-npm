import React from 'react';

export interface LanBridgeLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeLockSolid: React.FC<LanBridgeLockSolidProps>;
export default LanBridgeLockSolid;
