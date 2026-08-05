import React from 'react';

export interface LanCalendarImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarImageSolid(props: LanCalendarImageSolidProps): React.ReactElement;
export default LanCalendarImageSolid;
