import React from 'react';

export interface LanCircleURegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleURegular(props: LanCircleURegularProps): React.ReactElement;
export default LanCircleURegular;
