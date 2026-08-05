import React from 'react';

export interface LanCircleCRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCRegular(props: LanCircleCRegularProps): React.ReactElement;
export default LanCircleCRegular;
