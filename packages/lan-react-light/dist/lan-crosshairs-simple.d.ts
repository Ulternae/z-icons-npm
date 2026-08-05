import React from 'react';

export interface LanCrosshairsSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrosshairsSimple(props: LanCrosshairsSimpleProps): React.ReactElement;
export default LanCrosshairsSimple;
