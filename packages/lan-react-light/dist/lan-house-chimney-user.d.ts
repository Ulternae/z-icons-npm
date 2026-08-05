import React from 'react';

export interface LanHouseChimneyUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseChimneyUser(props: LanHouseChimneyUserProps): React.ReactElement;
export default LanHouseChimneyUser;
