import React from 'react';

export interface CoreLaptopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLaptopSolid(props: CoreLaptopSolidProps): React.ReactElement;
export default CoreLaptopSolid;
