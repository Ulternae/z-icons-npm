import React from 'react';

export interface LanPollPeopleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPollPeopleSolid(props: LanPollPeopleSolidProps): React.ReactElement;
export default LanPollPeopleSolid;
