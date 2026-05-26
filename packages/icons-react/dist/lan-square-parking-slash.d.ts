import React from 'react';

export interface LanSquareParkingSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareParkingSlash: React.FC<LanSquareParkingSlashProps>;
export default LanSquareParkingSlash;
