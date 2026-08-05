import React from 'react';

export interface LanBridgeWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeWater(props: LanBridgeWaterProps): React.ReactElement;
export default LanBridgeWater;
