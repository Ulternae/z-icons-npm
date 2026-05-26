import React from 'react';

export interface LanWaveSineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveSineRegular: React.FC<LanWaveSineRegularProps>;
export default LanWaveSineRegular;
