import React from 'react';

export interface LanShuttleSpaceVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttleSpaceVertical(props: LanShuttleSpaceVerticalProps): React.ReactElement;
export default LanShuttleSpaceVertical;
