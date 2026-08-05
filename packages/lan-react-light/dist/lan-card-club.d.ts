import React from 'react';

export interface LanCardClubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardClub(props: LanCardClubProps): React.ReactElement;
export default LanCardClub;
