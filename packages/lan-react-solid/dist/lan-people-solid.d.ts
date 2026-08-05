import React from 'react';

export interface LanPeopleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleSolid(props: LanPeopleSolidProps): React.ReactElement;
export default LanPeopleSolid;
