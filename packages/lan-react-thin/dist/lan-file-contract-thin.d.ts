import React from 'react';

export interface LanFileContractThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileContractThin(props: LanFileContractThinProps): React.ReactElement;
export default LanFileContractThin;
