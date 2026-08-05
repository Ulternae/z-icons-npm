import React from 'react';

export interface LanHockeyPuckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyPuckRegular(props: LanHockeyPuckRegularProps): React.ReactElement;
export default LanHockeyPuckRegular;
