import React from 'react';

export interface LanDoorClosedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoorClosedThin: React.FC<LanDoorClosedThinProps>;
export default LanDoorClosedThin;
