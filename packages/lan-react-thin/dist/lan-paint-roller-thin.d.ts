import React from 'react';

export interface LanPaintRollerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintRollerThin(props: LanPaintRollerThinProps): React.ReactElement;
export default LanPaintRollerThin;
