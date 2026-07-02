import React from 'react';

export interface CoreUsersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUsers(props: CoreUsersProps): React.ReactElement;
export default CoreUsers;
