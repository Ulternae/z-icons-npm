import React from 'react';

export interface LanCalendarUsersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarUsersThin(props: LanCalendarUsersThinProps): React.ReactElement;
export default LanCalendarUsersThin;
