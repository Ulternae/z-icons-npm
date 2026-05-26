import React from 'react';

export interface LanTugrikSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTugrikSignThin: React.FC<LanTugrikSignThinProps>;
export default LanTugrikSignThin;
