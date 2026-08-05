import React from 'react';

export interface LanRoadBridgeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadBridge(props: LanRoadBridgeProps): React.ReactElement;
export default LanRoadBridge;
