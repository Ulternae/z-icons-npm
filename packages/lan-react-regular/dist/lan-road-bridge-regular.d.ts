import React from 'react';

export interface LanRoadBridgeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadBridgeRegular(props: LanRoadBridgeRegularProps): React.ReactElement;
export default LanRoadBridgeRegular;
