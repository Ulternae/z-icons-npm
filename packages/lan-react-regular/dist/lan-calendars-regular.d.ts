import React from 'react';

export interface LanCalendarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarsRegular(props: LanCalendarsRegularProps): React.ReactElement;
export default LanCalendarsRegular;
