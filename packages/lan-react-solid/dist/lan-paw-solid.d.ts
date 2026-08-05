import React from 'react';

export interface LanPawSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPawSolid(props: LanPawSolidProps): React.ReactElement;
export default LanPawSolid;
