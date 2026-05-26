import React from 'react';

export interface LanShuttleVanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttleVanRegular: React.FC<LanShuttleVanRegularProps>;
export default LanShuttleVanRegular;
