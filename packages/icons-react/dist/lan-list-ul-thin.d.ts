import React from 'react';

export interface LanListUlThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListUlThin: React.FC<LanListUlThinProps>;
export default LanListUlThin;
