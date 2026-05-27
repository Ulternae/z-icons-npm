import React from 'react';

export interface CoreUsersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUsers: React.FC<CoreUsersProps>;
export default CoreUsers;
