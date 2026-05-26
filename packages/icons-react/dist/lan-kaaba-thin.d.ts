import React from 'react';

export interface LanKaabaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKaabaThin: React.FC<LanKaabaThinProps>;
export default LanKaabaThin;
