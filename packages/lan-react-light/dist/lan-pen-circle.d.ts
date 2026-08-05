import React from 'react';

export interface LanPenCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenCircle(props: LanPenCircleProps): React.ReactElement;
export default LanPenCircle;
