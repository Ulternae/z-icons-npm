import React from 'react';

export interface MinaUsersGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUsersGroup: React.FC<MinaUsersGroupProps>;
export default MinaUsersGroup;
