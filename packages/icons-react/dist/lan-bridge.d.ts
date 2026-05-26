import React from 'react';

export interface LanBridgeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridge: React.FC<LanBridgeProps>;
export default LanBridge;
