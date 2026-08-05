import React from 'react';

export interface LanCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePlusRegular(props: LanCirclePlusRegularProps): React.ReactElement;
export default LanCirclePlusRegular;
