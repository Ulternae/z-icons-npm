import React from 'react';

export interface LanRoadBridgeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadBridge: React.FC<LanRoadBridgeProps>;
export default LanRoadBridge;
