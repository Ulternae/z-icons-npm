import React from 'react';

export interface LanCircleLRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleLRegular(props: LanCircleLRegularProps): React.ReactElement;
export default LanCircleLRegular;
