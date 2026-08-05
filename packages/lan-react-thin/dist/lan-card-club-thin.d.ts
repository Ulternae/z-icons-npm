import React from 'react';

export interface LanCardClubThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardClubThin(props: LanCardClubThinProps): React.ReactElement;
export default LanCardClubThin;
