import React from 'react';

export interface LanFileContractRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileContractRegular(props: LanFileContractRegularProps): React.ReactElement;
export default LanFileContractRegular;
