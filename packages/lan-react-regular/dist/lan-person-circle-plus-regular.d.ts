import React from 'react';

export interface LanPersonCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCirclePlusRegular(props: LanPersonCirclePlusRegularProps): React.ReactElement;
export default LanPersonCirclePlusRegular;
