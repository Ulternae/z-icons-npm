import React from 'react';

export interface LanOctagonExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonExclamation: React.FC<LanOctagonExclamationProps>;
export default LanOctagonExclamation;
