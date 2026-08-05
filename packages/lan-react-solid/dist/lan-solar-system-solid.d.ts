import React from 'react';

export interface LanSolarSystemSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSolarSystemSolid(props: LanSolarSystemSolidProps): React.ReactElement;
export default LanSolarSystemSolid;
