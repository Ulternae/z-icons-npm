import React from 'react';

export interface LanBellExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellExclamation: React.FC<LanBellExclamationProps>;
export default LanBellExclamation;
