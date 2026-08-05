import React from 'react';

export interface LanCarPeopleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarPeopleSolid(props: LanCarPeopleSolidProps): React.ReactElement;
export default LanCarPeopleSolid;
