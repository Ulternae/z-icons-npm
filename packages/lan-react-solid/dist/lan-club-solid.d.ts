import React from 'react';

export interface LanClubSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClubSolid(props: LanClubSolidProps): React.ReactElement;
export default LanClubSolid;
