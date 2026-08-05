import React from 'react';

export interface LanFireBurnerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireBurnerRegular(props: LanFireBurnerRegularProps): React.ReactElement;
export default LanFireBurnerRegular;
