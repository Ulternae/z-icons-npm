import React from 'react';

export interface LanUsersLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersLineRegular(props: LanUsersLineRegularProps): React.ReactElement;
export default LanUsersLineRegular;
