import React from 'react';

export interface LanHouseFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFire(props: LanHouseFireProps): React.ReactElement;
export default LanHouseFire;
