import React from 'react';

export interface LanHouseFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFlagSolid(props: LanHouseFlagSolidProps): React.ReactElement;
export default LanHouseFlagSolid;
