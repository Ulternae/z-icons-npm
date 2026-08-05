import React from 'react';

export interface LanHockeyPuckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyPuckThin(props: LanHockeyPuckThinProps): React.ReactElement;
export default LanHockeyPuckThin;
