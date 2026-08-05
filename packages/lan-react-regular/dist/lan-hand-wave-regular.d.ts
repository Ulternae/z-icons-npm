import React from 'react';

export interface LanHandWaveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandWaveRegular(props: LanHandWaveRegularProps): React.ReactElement;
export default LanHandWaveRegular;
