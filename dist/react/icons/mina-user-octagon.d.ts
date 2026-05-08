import React from 'react';

export interface MinaUserOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserOctagon: React.FC<MinaUserOctagonProps>;
export default MinaUserOctagon;
