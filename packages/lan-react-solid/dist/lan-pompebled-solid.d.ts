import React from 'react';

export interface LanPompebledSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPompebledSolid(props: LanPompebledSolidProps): React.ReactElement;
export default LanPompebledSolid;
