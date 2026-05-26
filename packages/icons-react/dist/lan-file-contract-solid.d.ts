import React from 'react';

export interface LanFileContractSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileContractSolid: React.FC<LanFileContractSolidProps>;
export default LanFileContractSolid;
