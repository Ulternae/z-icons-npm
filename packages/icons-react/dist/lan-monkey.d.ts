import React from 'react';

export interface LanMonkeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMonkey: React.FC<LanMonkeyProps>;
export default LanMonkey;
