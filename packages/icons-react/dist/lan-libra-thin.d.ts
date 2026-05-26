import React from 'react';

export interface LanLibraThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLibraThin: React.FC<LanLibraThinProps>;
export default LanLibraThin;
