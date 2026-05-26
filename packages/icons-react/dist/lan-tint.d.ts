import React from 'react';

export interface LanTintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTint: React.FC<LanTintProps>;
export default LanTint;
