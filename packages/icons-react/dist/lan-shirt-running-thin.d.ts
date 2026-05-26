import React from 'react';

export interface LanShirtRunningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtRunningThin: React.FC<LanShirtRunningThinProps>;
export default LanShirtRunningThin;
