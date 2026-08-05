import React from 'react';

export interface LanCircleQRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQRegular(props: LanCircleQRegularProps): React.ReactElement;
export default LanCircleQRegular;
