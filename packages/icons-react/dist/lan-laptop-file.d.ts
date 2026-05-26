import React from 'react';

export interface LanLaptopFileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopFile: React.FC<LanLaptopFileProps>;
export default LanLaptopFile;
