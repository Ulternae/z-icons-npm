import React from 'react';

export interface LanUsersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsers(props: LanUsersProps): React.ReactElement;
export default LanUsers;
