import React from 'react';

export interface LanPersonWavingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonWavingRegular(props: LanPersonWavingRegularProps): React.ReactElement;
export default LanPersonWavingRegular;
