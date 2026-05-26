import React from 'react';

export interface LanCopyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCopyThin: React.FC<LanCopyThinProps>;
export default LanCopyThin;
