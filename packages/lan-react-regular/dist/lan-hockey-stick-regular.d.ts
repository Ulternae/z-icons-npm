import React from 'react';

export interface LanHockeyStickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyStickRegular(props: LanHockeyStickRegularProps): React.ReactElement;
export default LanHockeyStickRegular;
