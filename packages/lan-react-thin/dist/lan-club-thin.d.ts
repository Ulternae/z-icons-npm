import React from 'react';

export interface LanClubThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClubThin(props: LanClubThinProps): React.ReactElement;
export default LanClubThin;
