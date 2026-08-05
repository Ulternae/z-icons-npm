import React from 'react';

export interface LanSunAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunAltSolid(props: LanSunAltSolidProps): React.ReactElement;
export default LanSunAltSolid;
