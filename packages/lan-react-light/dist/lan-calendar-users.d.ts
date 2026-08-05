import React from 'react';

export interface LanCalendarUsersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarUsers(props: LanCalendarUsersProps): React.ReactElement;
export default LanCalendarUsers;
