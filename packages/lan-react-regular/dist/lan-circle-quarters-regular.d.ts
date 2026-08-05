import React from 'react';

export interface LanCircleQuartersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQuartersRegular(props: LanCircleQuartersRegularProps): React.ReactElement;
export default LanCircleQuartersRegular;
