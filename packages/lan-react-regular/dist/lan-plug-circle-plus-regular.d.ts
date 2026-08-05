import React from 'react';

export interface LanPlugCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCirclePlusRegular(props: LanPlugCirclePlusRegularProps): React.ReactElement;
export default LanPlugCirclePlusRegular;
