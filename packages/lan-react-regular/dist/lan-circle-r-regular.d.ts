import React from 'react';

export interface LanCircleRRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleRRegular(props: LanCircleRRegularProps): React.ReactElement;
export default LanCircleRRegular;
