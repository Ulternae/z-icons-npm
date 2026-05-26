import React from 'react';

export interface LanHouseLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseLock: React.FC<LanHouseLockProps>;
export default LanHouseLock;
