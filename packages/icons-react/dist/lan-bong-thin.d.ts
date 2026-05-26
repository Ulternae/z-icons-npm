import React from 'react';

export interface LanBongThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBongThin: React.FC<LanBongThinProps>;
export default LanBongThin;
