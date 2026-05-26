import React from 'react';

export interface LanWormRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWormRegular: React.FC<LanWormRegularProps>;
export default LanWormRegular;
