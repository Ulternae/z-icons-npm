import React from 'react';

export interface LanDoorClosedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoorClosed(props: LanDoorClosedProps): React.ReactElement;
export default LanDoorClosed;
