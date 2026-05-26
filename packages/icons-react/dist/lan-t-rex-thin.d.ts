import React from 'react';

export interface LanTRexThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTRexThin: React.FC<LanTRexThinProps>;
export default LanTRexThin;
