import React from 'react';

export interface LanParkingCircleSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanParkingCircleSlashThin: React.FC<LanParkingCircleSlashThinProps>;
export default LanParkingCircleSlashThin;
