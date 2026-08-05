import React from 'react';

export interface LanUserDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserDashed(props: LanUserDashedProps): React.ReactElement;
export default LanUserDashed;
