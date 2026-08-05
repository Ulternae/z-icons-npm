import React from 'react';

export interface LanBridgeCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeCircleCheckSolid(props: LanBridgeCircleCheckSolidProps): React.ReactElement;
export default LanBridgeCircleCheckSolid;
