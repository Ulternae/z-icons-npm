import React from 'react';

export interface LanBridgeLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeLock: React.FC<LanBridgeLockProps>;
export default LanBridgeLock;
