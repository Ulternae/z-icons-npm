import React from 'react';

export interface LanClubSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClubSolid: React.FC<LanClubSolidProps>;
export default LanClubSolid;
