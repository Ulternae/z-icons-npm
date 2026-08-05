import React from 'react';

export interface LanPersonDressSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDressSimple(props: LanPersonDressSimpleProps): React.ReactElement;
export default LanPersonDressSimple;
