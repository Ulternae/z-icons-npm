import React from 'react';

export interface LanFileContractRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileContractRegular: React.FC<LanFileContractRegularProps>;
export default LanFileContractRegular;
