import React from 'react';

export interface LanNeuterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNeuterRegular(props: LanNeuterRegularProps): React.ReactElement;
export default LanNeuterRegular;
