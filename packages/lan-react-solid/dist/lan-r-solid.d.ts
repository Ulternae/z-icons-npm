import React from 'react';

export interface LanRSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRSolid(props: LanRSolidProps): React.ReactElement;
export default LanRSolid;
