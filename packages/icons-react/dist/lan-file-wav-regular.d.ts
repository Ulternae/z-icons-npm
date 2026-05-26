import React from 'react';

export interface LanFileWavRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileWavRegular: React.FC<LanFileWavRegularProps>;
export default LanFileWavRegular;
