import React from 'react';

export interface MinaCalendarUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCalendarUp(props: MinaCalendarUpProps): React.ReactElement;
export default MinaCalendarUp;
