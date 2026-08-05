import React from 'react';

export interface LanCalendarNoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarNoteSolid(props: LanCalendarNoteSolidProps): React.ReactElement;
export default LanCalendarNoteSolid;
