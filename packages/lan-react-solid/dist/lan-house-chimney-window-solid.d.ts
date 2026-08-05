import React from 'react';

export interface LanHouseChimneyWindowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseChimneyWindowSolid(props: LanHouseChimneyWindowSolidProps): React.ReactElement;
export default LanHouseChimneyWindowSolid;
