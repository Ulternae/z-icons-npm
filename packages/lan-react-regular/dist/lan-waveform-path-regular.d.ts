import React from 'react';

export interface LanWaveformPathRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveformPathRegular(props: LanWaveformPathRegularProps): React.ReactElement;
export default LanWaveformPathRegular;
