import React from 'react';

export interface LanCircleGRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleGRegular(props: LanCircleGRegularProps): React.ReactElement;
export default LanCircleGRegular;
