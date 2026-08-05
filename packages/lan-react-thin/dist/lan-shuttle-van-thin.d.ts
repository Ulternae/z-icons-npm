import React from 'react';

export interface LanShuttleVanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttleVanThin(props: LanShuttleVanThinProps): React.ReactElement;
export default LanShuttleVanThin;
