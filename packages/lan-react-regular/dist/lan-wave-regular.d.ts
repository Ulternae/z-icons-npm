import React from 'react';

export interface LanWaveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveRegular(props: LanWaveRegularProps): React.ReactElement;
export default LanWaveRegular;
