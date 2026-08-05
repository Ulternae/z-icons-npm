import React from 'react';

export interface LanFileCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCirclePlusRegular(props: LanFileCirclePlusRegularProps): React.ReactElement;
export default LanFileCirclePlusRegular;
