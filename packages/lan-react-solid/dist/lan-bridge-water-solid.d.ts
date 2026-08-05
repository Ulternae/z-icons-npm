import React from 'react';

export interface LanBridgeWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeWaterSolid(props: LanBridgeWaterSolidProps): React.ReactElement;
export default LanBridgeWaterSolid;
