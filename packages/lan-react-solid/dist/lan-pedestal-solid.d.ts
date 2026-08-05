import React from 'react';

export interface LanPedestalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPedestalSolid(props: LanPedestalSolidProps): React.ReactElement;
export default LanPedestalSolid;
