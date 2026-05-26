import React from 'react';

export interface LanFileExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileExclamation: React.FC<LanFileExclamationProps>;
export default LanFileExclamation;
