import React from 'react';

export interface LanRoadBridgeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadBridgeRegular: React.FC<LanRoadBridgeRegularProps>;
export default LanRoadBridgeRegular;
