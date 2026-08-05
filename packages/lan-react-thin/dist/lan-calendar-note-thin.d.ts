import React from 'react';

export interface LanCalendarNoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarNoteThin(props: LanCalendarNoteThinProps): React.ReactElement;
export default LanCalendarNoteThin;
