import React from 'react';

export interface LanBridgeCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeCircleCheck: React.FC<LanBridgeCircleCheckProps>;
export default LanBridgeCircleCheck;
