import React from 'react';

export interface LanTentDoublePeakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTentDoublePeak: React.FC<LanTentDoublePeakProps>;
export default LanTentDoublePeak;
