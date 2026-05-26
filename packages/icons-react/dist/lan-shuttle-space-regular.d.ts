import React from 'react';

export interface LanShuttleSpaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttleSpaceRegular: React.FC<LanShuttleSpaceRegularProps>;
export default LanShuttleSpaceRegular;
