import React from 'react';

export interface LanBridgeCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeCircleCheckRegular: React.FC<LanBridgeCircleCheckRegularProps>;
export default LanBridgeCircleCheckRegular;
