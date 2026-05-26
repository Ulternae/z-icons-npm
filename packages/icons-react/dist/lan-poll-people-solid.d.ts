import React from 'react';

export interface LanPollPeopleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPollPeopleSolid: React.FC<LanPollPeopleSolidProps>;
export default LanPollPeopleSolid;
