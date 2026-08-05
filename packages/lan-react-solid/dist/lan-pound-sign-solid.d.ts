import React from 'react';

export interface LanPoundSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPoundSignSolid(props: LanPoundSignSolidProps): React.ReactElement;
export default LanPoundSignSolid;
