import React from 'react';

export interface LanUfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUfo: React.FC<LanUfoProps>;
export default LanUfo;
