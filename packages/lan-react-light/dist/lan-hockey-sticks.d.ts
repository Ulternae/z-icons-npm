import React from 'react';

export interface LanHockeySticksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeySticks(props: LanHockeySticksProps): React.ReactElement;
export default LanHockeySticks;
