import React from 'react';

export interface LanGearApiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearApiRegular(props: LanGearApiRegularProps): React.ReactElement;
export default LanGearApiRegular;
