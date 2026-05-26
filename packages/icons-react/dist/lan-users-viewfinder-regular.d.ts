import React from 'react';

export interface LanUsersViewfinderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersViewfinderRegular: React.FC<LanUsersViewfinderRegularProps>;
export default LanUsersViewfinderRegular;
