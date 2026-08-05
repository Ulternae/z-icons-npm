import React from 'react';

export interface LanPersonDollyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDollyRegular(props: LanPersonDollyRegularProps): React.ReactElement;
export default LanPersonDollyRegular;
