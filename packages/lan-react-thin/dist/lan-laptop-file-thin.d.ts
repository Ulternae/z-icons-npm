import React from 'react';

export interface LanLaptopFileThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLaptopFileThin(props: LanLaptopFileThinProps): React.ReactElement;
export default LanLaptopFileThin;
