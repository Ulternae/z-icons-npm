import React from 'react';

export interface LanBarnSiloThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarnSiloThin(props: LanBarnSiloThinProps): React.ReactElement;
export default LanBarnSiloThin;
