import React from 'react';

export interface LanFileContractProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileContract: React.FC<LanFileContractProps>;
export default LanFileContract;
