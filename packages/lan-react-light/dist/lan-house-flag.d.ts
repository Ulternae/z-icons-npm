import React from 'react';

export interface LanHouseFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFlag(props: LanHouseFlagProps): React.ReactElement;
export default LanHouseFlag;
