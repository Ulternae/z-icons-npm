import React from 'react';

export interface LanDoorClosedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoorClosed: React.FC<LanDoorClosedProps>;
export default LanDoorClosed;
