import React from 'react';

export interface LanBridgeWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeWaterSolid: React.FC<LanBridgeWaterSolidProps>;
export default LanBridgeWaterSolid;
