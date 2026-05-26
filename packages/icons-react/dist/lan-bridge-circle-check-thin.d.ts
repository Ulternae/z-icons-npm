import React from 'react';

export interface LanBridgeCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeCircleCheckThin: React.FC<LanBridgeCircleCheckThinProps>;
export default LanBridgeCircleCheckThin;
