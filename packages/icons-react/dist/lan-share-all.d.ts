import React from 'react';

export interface LanShareAllProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShareAll: React.FC<LanShareAllProps>;
export default LanShareAll;
