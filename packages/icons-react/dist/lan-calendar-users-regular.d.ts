import React from 'react';

export interface LanCalendarUsersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarUsersRegular: React.FC<LanCalendarUsersRegularProps>;
export default LanCalendarUsersRegular;
