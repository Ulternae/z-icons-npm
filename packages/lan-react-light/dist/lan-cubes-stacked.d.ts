import React from 'react';

export interface LanCubesStackedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCubesStacked(props: LanCubesStackedProps): React.ReactElement;
export default LanCubesStacked;
