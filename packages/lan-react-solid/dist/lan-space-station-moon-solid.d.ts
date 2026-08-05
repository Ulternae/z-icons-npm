import React from 'react';

export interface LanSpaceStationMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpaceStationMoonSolid(props: LanSpaceStationMoonSolidProps): React.ReactElement;
export default LanSpaceStationMoonSolid;
