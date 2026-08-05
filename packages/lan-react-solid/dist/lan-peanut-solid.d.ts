import React from 'react';

export interface LanPeanutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeanutSolid(props: LanPeanutSolidProps): React.ReactElement;
export default LanPeanutSolid;
