import React from 'react';

export interface LanListCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListCheck: React.FC<LanListCheckProps>;
export default LanListCheck;
