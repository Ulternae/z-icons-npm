import React from 'react';

export interface LanClubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClub(props: LanClubProps): React.ReactElement;
export default LanClub;
