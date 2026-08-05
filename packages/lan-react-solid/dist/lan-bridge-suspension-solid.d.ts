import React from 'react';

export interface LanBridgeSuspensionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeSuspensionSolid(props: LanBridgeSuspensionSolidProps): React.ReactElement;
export default LanBridgeSuspensionSolid;
