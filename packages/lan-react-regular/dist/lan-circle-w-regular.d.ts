import React from 'react';

export interface LanCircleWRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWRegular(props: LanCircleWRegularProps): React.ReactElement;
export default LanCircleWRegular;
