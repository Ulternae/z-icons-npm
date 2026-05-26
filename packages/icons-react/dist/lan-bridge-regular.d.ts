import React from 'react';

export interface LanBridgeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeRegular: React.FC<LanBridgeRegularProps>;
export default LanBridgeRegular;
