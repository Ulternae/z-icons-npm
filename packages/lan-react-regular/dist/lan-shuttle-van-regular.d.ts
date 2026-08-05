import React from 'react';

export interface LanShuttleVanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttleVanRegular(props: LanShuttleVanRegularProps): React.ReactElement;
export default LanShuttleVanRegular;
