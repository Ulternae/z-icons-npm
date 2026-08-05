import React from 'react';

export interface LanGolfClubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGolfClub(props: LanGolfClubProps): React.ReactElement;
export default LanGolfClub;
