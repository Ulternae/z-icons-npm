import React from 'react';

export interface LanSealExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSealExclamation: React.FC<LanSealExclamationProps>;
export default LanSealExclamation;
