import React from 'react';

export interface LanSproutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprout: React.FC<LanSproutProps>;
export default LanSprout;
