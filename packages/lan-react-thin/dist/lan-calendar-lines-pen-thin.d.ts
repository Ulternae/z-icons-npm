import React from 'react';

export interface LanCalendarLinesPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarLinesPenThin(props: LanCalendarLinesPenThinProps): React.ReactElement;
export default LanCalendarLinesPenThin;
