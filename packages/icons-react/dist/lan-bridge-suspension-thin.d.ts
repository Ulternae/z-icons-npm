import React from 'react';

export interface LanBridgeSuspensionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeSuspensionThin: React.FC<LanBridgeSuspensionThinProps>;
export default LanBridgeSuspensionThin;
