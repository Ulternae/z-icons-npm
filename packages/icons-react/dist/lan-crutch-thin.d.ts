import React from 'react';

export interface LanCrutchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrutchThin: React.FC<LanCrutchThinProps>;
export default LanCrutchThin;
