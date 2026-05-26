import React from 'react';

export interface LanTacoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTacoThin: React.FC<LanTacoThinProps>;
export default LanTacoThin;
