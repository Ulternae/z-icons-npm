import React from 'react';

export interface LanExclamationThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExclamationThin: React.FC<LanExclamationThinProps>;
export default LanExclamationThin;
