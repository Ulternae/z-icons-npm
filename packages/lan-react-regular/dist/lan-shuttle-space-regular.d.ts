import React from 'react';

export interface LanShuttleSpaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttleSpaceRegular(props: LanShuttleSpaceRegularProps): React.ReactElement;
export default LanShuttleSpaceRegular;
