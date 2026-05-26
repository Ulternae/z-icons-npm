import React from 'react';

export interface LanTally3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally3Regular: React.FC<LanTally3RegularProps>;
export default LanTally3Regular;
