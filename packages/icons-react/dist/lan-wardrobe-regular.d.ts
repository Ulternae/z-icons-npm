import React from 'react';

export interface LanWardrobeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWardrobeRegular: React.FC<LanWardrobeRegularProps>;
export default LanWardrobeRegular;
