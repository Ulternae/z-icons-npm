import React from 'react';

export interface LanHryvniaSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHryvniaSign: React.FC<LanHryvniaSignProps>;
export default LanHryvniaSign;
