import React from 'react';

export interface LanShelvesEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShelvesEmptyThin: React.FC<LanShelvesEmptyThinProps>;
export default LanShelvesEmptyThin;
