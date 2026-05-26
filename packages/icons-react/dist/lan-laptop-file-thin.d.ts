import React from 'react';

export interface LanLaptopFileThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopFileThin: React.FC<LanLaptopFileThinProps>;
export default LanLaptopFileThin;
