import React from 'react';

export interface LanWRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWRegular: React.FC<LanWRegularProps>;
export default LanWRegular;
