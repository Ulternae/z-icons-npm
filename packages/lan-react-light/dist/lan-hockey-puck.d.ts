import React from 'react';

export interface LanHockeyPuckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyPuck(props: LanHockeyPuckProps): React.ReactElement;
export default LanHockeyPuck;
