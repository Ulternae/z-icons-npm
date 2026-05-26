import React from 'react';

export interface LanMonkeyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMonkeyThin: React.FC<LanMonkeyThinProps>;
export default LanMonkeyThin;
