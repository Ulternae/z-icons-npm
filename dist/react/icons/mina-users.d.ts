import React from 'react';

export interface MinaUsersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUsers: React.FC<MinaUsersProps>;
export default MinaUsers;
