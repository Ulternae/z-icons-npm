import React from 'react';

export interface LanHouseFloodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFloodSolid(props: LanHouseFloodSolidProps): React.ReactElement;
export default LanHouseFloodSolid;
