import React from 'react';

export interface LanCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleRegular(props: LanCircleRegularProps): React.ReactElement;
export default LanCircleRegular;
