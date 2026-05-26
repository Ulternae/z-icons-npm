import React from 'react';

export interface LanCalendarUsersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarUsers: React.FC<LanCalendarUsersProps>;
export default LanCalendarUsers;
