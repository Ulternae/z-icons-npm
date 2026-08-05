import React from 'react';

export interface LanRvSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRvSolid(props: LanRvSolidProps): React.ReactElement;
export default LanRvSolid;
