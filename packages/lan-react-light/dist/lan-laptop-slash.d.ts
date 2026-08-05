import React from 'react';

export interface LanLaptopSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLaptopSlash(props: LanLaptopSlashProps): React.ReactElement;
export default LanLaptopSlash;
