import React from 'react';

export interface LanCalendarAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarAlt(props: LanCalendarAltProps): React.ReactElement;
export default LanCalendarAlt;
