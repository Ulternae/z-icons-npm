import React from 'react';

export interface LanBridgeWaterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeWaterRegular(props: LanBridgeWaterRegularProps): React.ReactElement;
export default LanBridgeWaterRegular;
