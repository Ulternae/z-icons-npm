import React from 'react';

export interface LanCrosshairsSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrosshairsSimpleRegular(props: LanCrosshairsSimpleRegularProps): React.ReactElement;
export default LanCrosshairsSimpleRegular;
