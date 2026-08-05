import React from 'react';

export interface LanFileContractProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileContract(props: LanFileContractProps): React.ReactElement;
export default LanFileContract;
