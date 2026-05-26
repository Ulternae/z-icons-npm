import React from 'react';

export interface LanCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheck: React.FC<LanCheckProps>;
export default LanCheck;
