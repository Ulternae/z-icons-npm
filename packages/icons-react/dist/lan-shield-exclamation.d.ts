import React from 'react';

export interface LanShieldExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldExclamation: React.FC<LanShieldExclamationProps>;
export default LanShieldExclamation;
