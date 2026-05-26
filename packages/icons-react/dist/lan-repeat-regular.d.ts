import React from 'react';

export interface LanRepeatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRepeatRegular: React.FC<LanRepeatRegularProps>;
export default LanRepeatRegular;
