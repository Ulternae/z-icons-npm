import React from 'react';

export interface LanShieldCatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldCatSolid(props: LanShieldCatSolidProps): React.ReactElement;
export default LanShieldCatSolid;
