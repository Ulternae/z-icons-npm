import React from 'react';

export interface CoreLaptopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLaptop(props: CoreLaptopProps): React.ReactElement;
export default CoreLaptop;
