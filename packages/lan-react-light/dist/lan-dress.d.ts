import React from 'react';

export interface LanDressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDress(props: LanDressProps): React.ReactElement;
export default LanDress;
