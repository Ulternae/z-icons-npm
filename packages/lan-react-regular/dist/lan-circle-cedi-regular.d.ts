import React from 'react';

export interface LanCircleCediRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCediRegular(props: LanCircleCediRegularProps): React.ReactElement;
export default LanCircleCediRegular;
