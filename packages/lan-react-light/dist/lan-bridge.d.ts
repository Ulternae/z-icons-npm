import React from 'react';

export interface LanBridgeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridge(props: LanBridgeProps): React.ReactElement;
export default LanBridge;
