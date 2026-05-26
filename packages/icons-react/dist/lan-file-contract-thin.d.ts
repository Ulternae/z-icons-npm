import React from 'react';

export interface LanFileContractThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileContractThin: React.FC<LanFileContractThinProps>;
export default LanFileContractThin;
