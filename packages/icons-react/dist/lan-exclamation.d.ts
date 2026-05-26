import React from 'react';

export interface LanExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExclamation: React.FC<LanExclamationProps>;
export default LanExclamation;
