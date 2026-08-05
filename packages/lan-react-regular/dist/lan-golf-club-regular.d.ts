import React from 'react';

export interface LanGolfClubRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGolfClubRegular(props: LanGolfClubRegularProps): React.ReactElement;
export default LanGolfClubRegular;
