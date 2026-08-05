import React from 'react';

export interface LanPenLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenLineSolid(props: LanPenLineSolidProps): React.ReactElement;
export default LanPenLineSolid;
