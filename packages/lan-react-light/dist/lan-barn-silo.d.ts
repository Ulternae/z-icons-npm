import React from 'react';

export interface LanBarnSiloProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarnSilo(props: LanBarnSiloProps): React.ReactElement;
export default LanBarnSilo;
