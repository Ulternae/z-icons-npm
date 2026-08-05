import React from 'react';

export interface LanCirclePlayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePlayRegular(props: LanCirclePlayRegularProps): React.ReactElement;
export default LanCirclePlayRegular;
