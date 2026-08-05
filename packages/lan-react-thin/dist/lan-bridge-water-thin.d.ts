import React from 'react';

export interface LanBridgeWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeWaterThin(props: LanBridgeWaterThinProps): React.ReactElement;
export default LanBridgeWaterThin;
