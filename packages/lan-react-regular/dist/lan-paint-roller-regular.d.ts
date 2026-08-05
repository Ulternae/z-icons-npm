import React from 'react';

export interface LanPaintRollerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintRollerRegular(props: LanPaintRollerRegularProps): React.ReactElement;
export default LanPaintRollerRegular;
