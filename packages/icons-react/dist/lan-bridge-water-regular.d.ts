import React from 'react';

export interface LanBridgeWaterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeWaterRegular: React.FC<LanBridgeWaterRegularProps>;
export default LanBridgeWaterRegular;
