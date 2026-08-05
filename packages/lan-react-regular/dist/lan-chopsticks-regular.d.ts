import React from 'react';

export interface LanChopsticksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChopsticksRegular(props: LanChopsticksRegularProps): React.ReactElement;
export default LanChopsticksRegular;
