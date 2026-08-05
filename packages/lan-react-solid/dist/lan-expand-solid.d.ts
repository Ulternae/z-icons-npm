import React from 'react';

export interface LanExpandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExpandSolid(props: LanExpandSolidProps): React.ReactElement;
export default LanExpandSolid;
