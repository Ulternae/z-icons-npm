import React from 'react';

export interface LanListUlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListUl: React.FC<LanListUlProps>;
export default LanListUl;
