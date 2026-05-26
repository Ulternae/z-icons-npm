import React from 'react';

export interface LanUsersClassRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersClassRegular: React.FC<LanUsersClassRegularProps>;
export default LanUsersClassRegular;
