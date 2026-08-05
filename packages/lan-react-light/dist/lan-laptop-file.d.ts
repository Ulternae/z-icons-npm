import React from 'react';

export interface LanLaptopFileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLaptopFile(props: LanLaptopFileProps): React.ReactElement;
export default LanLaptopFile;
