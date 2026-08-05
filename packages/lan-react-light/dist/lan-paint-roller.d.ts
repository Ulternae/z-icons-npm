import React from 'react';

export interface LanPaintRollerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintRoller(props: LanPaintRollerProps): React.ReactElement;
export default LanPaintRoller;
