import React from 'react';

export interface LanDoorOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoorOpen: React.FC<LanDoorOpenProps>;
export default LanDoorOpen;
