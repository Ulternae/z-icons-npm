import React from 'react';

export interface LanWindowMaximizeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowMaximizeRegular(props: LanWindowMaximizeRegularProps): React.ReactElement;
export default LanWindowMaximizeRegular;
