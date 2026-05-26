import React from 'react';

export interface LanWaveformPathRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveformPathRegular: React.FC<LanWaveformPathRegularProps>;
export default LanWaveformPathRegular;
