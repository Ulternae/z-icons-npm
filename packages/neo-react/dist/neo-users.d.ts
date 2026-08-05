import React from 'react';

export interface NeoUsersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoUsers(props: NeoUsersProps): React.ReactElement;
export default NeoUsers;
