import React from 'react';

export interface LanRadiationAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadiationAltSolid(props: LanRadiationAltSolidProps): React.ReactElement;
export default LanRadiationAltSolid;
