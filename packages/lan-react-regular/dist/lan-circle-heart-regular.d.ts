import React from 'react';

export interface LanCircleHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHeartRegular(props: LanCircleHeartRegularProps): React.ReactElement;
export default LanCircleHeartRegular;
