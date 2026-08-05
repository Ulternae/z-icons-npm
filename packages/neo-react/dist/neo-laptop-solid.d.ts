import React from 'react';

export interface NeoLaptopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLaptopSolid(props: NeoLaptopSolidProps): React.ReactElement;
export default NeoLaptopSolid;
