import React from 'react';

export interface LanExpandWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExpandWideSolid(props: LanExpandWideSolidProps): React.ReactElement;
export default LanExpandWideSolid;
