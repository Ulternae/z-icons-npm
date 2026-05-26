import React from 'react';

export interface LanCopyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCopy: React.FC<LanCopyProps>;
export default LanCopy;
