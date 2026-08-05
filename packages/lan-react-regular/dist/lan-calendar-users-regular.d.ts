import React from 'react';

export interface LanCalendarUsersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarUsersRegular(props: LanCalendarUsersRegularProps): React.ReactElement;
export default LanCalendarUsersRegular;
