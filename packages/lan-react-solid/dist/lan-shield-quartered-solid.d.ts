import React from 'react';

export interface LanShieldQuarteredSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldQuarteredSolid(props: LanShieldQuarteredSolidProps): React.ReactElement;
export default LanShieldQuarteredSolid;
