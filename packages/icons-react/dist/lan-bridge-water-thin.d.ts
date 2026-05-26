import React from 'react';

export interface LanBridgeWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeWaterThin: React.FC<LanBridgeWaterThinProps>;
export default LanBridgeWaterThin;
