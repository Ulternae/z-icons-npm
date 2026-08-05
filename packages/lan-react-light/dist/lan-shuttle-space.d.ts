import React from 'react';

export interface LanShuttleSpaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttleSpace(props: LanShuttleSpaceProps): React.ReactElement;
export default LanShuttleSpace;
