import React from 'react';

export interface LanFileContractSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileContractSolid(props: LanFileContractSolidProps): React.ReactElement;
export default LanFileContractSolid;
