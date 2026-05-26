import React from 'react';

export interface LanForkKnifeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForkKnife: React.FC<LanForkKnifeProps>;
export default LanForkKnife;
