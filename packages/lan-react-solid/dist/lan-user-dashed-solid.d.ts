import React from 'react';

export interface LanUserDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserDashedSolid(props: LanUserDashedSolidProps): React.ReactElement;
export default LanUserDashedSolid;
