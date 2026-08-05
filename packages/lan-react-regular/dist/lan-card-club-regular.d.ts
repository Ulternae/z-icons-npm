import React from 'react';

export interface LanCardClubRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardClubRegular(props: LanCardClubRegularProps): React.ReactElement;
export default LanCardClubRegular;
