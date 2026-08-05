import React from 'react';

export interface LanPersonDressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDress(props: LanPersonDressProps): React.ReactElement;
export default LanPersonDress;
