import React from 'react';

export interface LanStoolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStool: React.FC<LanStoolProps>;
export default LanStool;
