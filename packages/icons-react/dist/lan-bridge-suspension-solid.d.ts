import React from 'react';

export interface LanBridgeSuspensionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeSuspensionSolid: React.FC<LanBridgeSuspensionSolidProps>;
export default LanBridgeSuspensionSolid;
