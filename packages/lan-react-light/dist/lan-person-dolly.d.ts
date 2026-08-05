import React from 'react';

export interface LanPersonDollyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDolly(props: LanPersonDollyProps): React.ReactElement;
export default LanPersonDolly;
