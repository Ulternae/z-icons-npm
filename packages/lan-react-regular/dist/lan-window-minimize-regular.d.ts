import React from 'react';

export interface LanWindowMinimizeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowMinimizeRegular(props: LanWindowMinimizeRegularProps): React.ReactElement;
export default LanWindowMinimizeRegular;
