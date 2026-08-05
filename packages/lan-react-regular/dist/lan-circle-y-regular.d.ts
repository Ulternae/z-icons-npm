import React from 'react';

export interface LanCircleYRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleYRegular(props: LanCircleYRegularProps): React.ReactElement;
export default LanCircleYRegular;
