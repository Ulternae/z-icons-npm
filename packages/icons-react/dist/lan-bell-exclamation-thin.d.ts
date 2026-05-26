import React from 'react';

export interface LanBellExclamationThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellExclamationThin: React.FC<LanBellExclamationThinProps>;
export default LanBellExclamationThin;
