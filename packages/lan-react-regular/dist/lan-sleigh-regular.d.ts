import React from 'react';

export interface LanSleighRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSleighRegular(props: LanSleighRegularProps): React.ReactElement;
export default LanSleighRegular;
