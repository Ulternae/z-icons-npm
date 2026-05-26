import React from 'react';

export interface LanBridgeWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeWater: React.FC<LanBridgeWaterProps>;
export default LanBridgeWater;
