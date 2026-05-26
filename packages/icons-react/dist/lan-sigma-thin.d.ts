import React from 'react';

export interface LanSigmaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSigmaThin: React.FC<LanSigmaThinProps>;
export default LanSigmaThin;
