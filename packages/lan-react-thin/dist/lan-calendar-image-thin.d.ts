import React from 'react';

export interface LanCalendarImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarImageThin(props: LanCalendarImageThinProps): React.ReactElement;
export default LanCalendarImageThin;
