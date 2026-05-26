import React from 'react';

export interface LanDirectionUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDirectionUpDown: React.FC<LanDirectionUpDownProps>;
export default LanDirectionUpDown;
