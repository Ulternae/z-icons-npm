import React from 'react';

export interface LanCrosshairsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrosshairsRegular(props: LanCrosshairsRegularProps): React.ReactElement;
export default LanCrosshairsRegular;
