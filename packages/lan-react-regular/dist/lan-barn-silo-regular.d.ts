import React from 'react';

export interface LanBarnSiloRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarnSiloRegular(props: LanBarnSiloRegularProps): React.ReactElement;
export default LanBarnSiloRegular;
