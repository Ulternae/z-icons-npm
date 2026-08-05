import React from 'react';

export interface NeoLaptopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLaptop(props: NeoLaptopProps): React.ReactElement;
export default NeoLaptop;
