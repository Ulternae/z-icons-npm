import React from 'react';

export interface LanCrosshairsSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrosshairsSimpleThin(props: LanCrosshairsSimpleThinProps): React.ReactElement;
export default LanCrosshairsSimpleThin;
