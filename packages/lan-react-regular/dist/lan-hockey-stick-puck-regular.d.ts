import React from 'react';

export interface LanHockeyStickPuckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyStickPuckRegular(props: LanHockeyStickPuckRegularProps): React.ReactElement;
export default LanHockeyStickPuckRegular;
