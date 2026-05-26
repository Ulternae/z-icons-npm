import React from 'react';

export interface LanIceSkateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIceSkateRegular: React.FC<LanIceSkateRegularProps>;
export default LanIceSkateRegular;
