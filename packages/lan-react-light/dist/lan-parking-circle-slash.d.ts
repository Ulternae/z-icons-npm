import React from 'react';

export interface LanParkingCircleSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanParkingCircleSlash(props: LanParkingCircleSlashProps): React.ReactElement;
export default LanParkingCircleSlash;
