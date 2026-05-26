import React from 'react';

export interface LanBridgeLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeLockRegular: React.FC<LanBridgeLockRegularProps>;
export default LanBridgeLockRegular;
