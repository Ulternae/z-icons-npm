import React from 'react';

export interface LanHouseDaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseDaySolid(props: LanHouseDaySolidProps): React.ReactElement;
export default LanHouseDaySolid;
