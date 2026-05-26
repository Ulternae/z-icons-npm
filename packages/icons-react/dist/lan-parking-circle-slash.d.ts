import React from 'react';

export interface LanParkingCircleSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanParkingCircleSlash: React.FC<LanParkingCircleSlashProps>;
export default LanParkingCircleSlash;
