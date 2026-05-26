import React from 'react';

export interface LanBridgeCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeCircleCheckSolid: React.FC<LanBridgeCircleCheckSolidProps>;
export default LanBridgeCircleCheckSolid;
