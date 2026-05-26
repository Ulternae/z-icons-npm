import React from 'react';

export interface LanThListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThList: React.FC<LanThListProps>;
export default LanThList;
