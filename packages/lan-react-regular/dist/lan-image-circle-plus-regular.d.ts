import React from 'react';

export interface LanImageCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageCirclePlusRegular(props: LanImageCirclePlusRegularProps): React.ReactElement;
export default LanImageCirclePlusRegular;
