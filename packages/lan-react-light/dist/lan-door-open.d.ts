import React from 'react';

export interface LanDoorOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoorOpen(props: LanDoorOpenProps): React.ReactElement;
export default LanDoorOpen;
