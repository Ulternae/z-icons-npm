import React from 'react';

export interface LanStoreLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreLockThin: React.FC<LanStoreLockThinProps>;
export default LanStoreLockThin;
