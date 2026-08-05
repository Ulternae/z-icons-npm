import React from 'react';

export interface LanCircleZRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleZRegular(props: LanCircleZRegularProps): React.ReactElement;
export default LanCircleZRegular;
