import React from 'react';

export interface LanHouseSignalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseSignalSolid(props: LanHouseSignalSolidProps): React.ReactElement;
export default LanHouseSignalSolid;
