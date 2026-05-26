import React from 'react';

export interface LanShelvesEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShelvesEmpty: React.FC<LanShelvesEmptyProps>;
export default LanShelvesEmpty;
