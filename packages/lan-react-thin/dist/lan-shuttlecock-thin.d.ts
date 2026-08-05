import React from 'react';

export interface LanShuttlecockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttlecockThin(props: LanShuttlecockThinProps): React.ReactElement;
export default LanShuttlecockThin;
