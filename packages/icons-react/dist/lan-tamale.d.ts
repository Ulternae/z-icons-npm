import React from 'react';

export interface LanTamaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTamale: React.FC<LanTamaleProps>;
export default LanTamale;
