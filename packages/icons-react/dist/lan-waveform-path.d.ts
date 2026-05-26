import React from 'react';

export interface LanWaveformPathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveformPath: React.FC<LanWaveformPathProps>;
export default LanWaveformPath;
