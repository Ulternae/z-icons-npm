import React from 'react';

export interface LanKipSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKipSign: React.FC<LanKipSignProps>;
export default LanKipSign;
