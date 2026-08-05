import React from 'react';

export interface LanGolfClubThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGolfClubThin(props: LanGolfClubThinProps): React.ReactElement;
export default LanGolfClubThin;
