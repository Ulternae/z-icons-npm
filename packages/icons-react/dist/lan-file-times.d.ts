import React from 'react';

export interface LanFileTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileTimes: React.FC<LanFileTimesProps>;
export default LanFileTimes;
