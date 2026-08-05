import React from 'react';

export interface MinaUsersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUsers(props: MinaUsersProps): React.ReactElement;
export default MinaUsers;
