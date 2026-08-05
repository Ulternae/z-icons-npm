import React from 'react';

export interface LanPeachSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeachSolid(props: LanPeachSolidProps): React.ReactElement;
export default LanPeachSolid;
