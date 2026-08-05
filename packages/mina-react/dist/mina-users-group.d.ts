import React from 'react';

export interface MinaUsersGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUsersGroup(props: MinaUsersGroupProps): React.ReactElement;
export default MinaUsersGroup;
