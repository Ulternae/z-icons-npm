import React from 'react';

export interface LanBridgeLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeLockThin: React.FC<LanBridgeLockThinProps>;
export default LanBridgeLockThin;
