import React from 'react';

export interface LanCardClubSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardClubSolid(props: LanCardClubSolidProps): React.ReactElement;
export default LanCardClubSolid;
