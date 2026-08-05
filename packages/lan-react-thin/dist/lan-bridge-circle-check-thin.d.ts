import React from 'react';

export interface LanBridgeCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeCircleCheckThin(props: LanBridgeCircleCheckThinProps): React.ReactElement;
export default LanBridgeCircleCheckThin;
