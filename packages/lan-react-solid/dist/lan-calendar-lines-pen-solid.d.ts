import React from 'react';

export interface LanCalendarLinesPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarLinesPenSolid(props: LanCalendarLinesPenSolidProps): React.ReactElement;
export default LanCalendarLinesPenSolid;
