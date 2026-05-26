import React from 'react';

export interface LanPeachProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeach: React.FC<LanPeachProps>;
export default LanPeach;
