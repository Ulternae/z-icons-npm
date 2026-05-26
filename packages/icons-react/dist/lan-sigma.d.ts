import React from 'react';

export interface LanSigmaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSigma: React.FC<LanSigmaProps>;
export default LanSigma;
