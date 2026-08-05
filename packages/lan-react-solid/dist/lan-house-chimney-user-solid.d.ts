import React from 'react';

export interface LanHouseChimneyUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseChimneyUserSolid(props: LanHouseChimneyUserSolidProps): React.ReactElement;
export default LanHouseChimneyUserSolid;
