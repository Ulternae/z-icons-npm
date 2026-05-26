import React from 'react';

export interface LanSignatureLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignatureLockThin: React.FC<LanSignatureLockThinProps>;
export default LanSignatureLockThin;
