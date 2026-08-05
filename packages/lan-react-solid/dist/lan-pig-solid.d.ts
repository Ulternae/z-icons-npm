import React from 'react';

export interface LanPigSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPigSolid(props: LanPigSolidProps): React.ReactElement;
export default LanPigSolid;
