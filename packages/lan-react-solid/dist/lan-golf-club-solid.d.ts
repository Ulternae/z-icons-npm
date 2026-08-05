import React from 'react';

export interface LanGolfClubSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGolfClubSolid(props: LanGolfClubSolidProps): React.ReactElement;
export default LanGolfClubSolid;
