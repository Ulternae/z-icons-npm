import React from 'react';

export interface LanBridgeCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeCircleCheck(props: LanBridgeCircleCheckProps): React.ReactElement;
export default LanBridgeCircleCheck;
