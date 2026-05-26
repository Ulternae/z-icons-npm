import React from 'react';

export interface LanBahaiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBahaiThin: React.FC<LanBahaiThinProps>;
export default LanBahaiThin;
