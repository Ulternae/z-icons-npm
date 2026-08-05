import React from 'react';

export interface LanClubRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClubRegular(props: LanClubRegularProps): React.ReactElement;
export default LanClubRegular;
