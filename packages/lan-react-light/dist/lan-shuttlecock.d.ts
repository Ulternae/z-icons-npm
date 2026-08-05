import React from 'react';

export interface LanShuttlecockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttlecock(props: LanShuttlecockProps): React.ReactElement;
export default LanShuttlecock;
