import React from 'react';

export interface LanPooSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPooSolid(props: LanPooSolidProps): React.ReactElement;
export default LanPooSolid;
