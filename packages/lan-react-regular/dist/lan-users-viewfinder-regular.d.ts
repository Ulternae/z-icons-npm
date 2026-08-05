import React from 'react';

export interface LanUsersViewfinderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersViewfinderRegular(props: LanUsersViewfinderRegularProps): React.ReactElement;
export default LanUsersViewfinderRegular;
