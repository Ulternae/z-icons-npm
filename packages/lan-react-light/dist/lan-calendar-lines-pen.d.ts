import React from 'react';

export interface LanCalendarLinesPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarLinesPen(props: LanCalendarLinesPenProps): React.ReactElement;
export default LanCalendarLinesPen;
