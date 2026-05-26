import React from 'react';

export interface LanLaptopSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopSlash: React.FC<LanLaptopSlashProps>;
export default LanLaptopSlash;
