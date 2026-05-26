import React from 'react';

export interface LanGlassCheersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassCheers: React.FC<LanGlassCheersProps>;
export default LanGlassCheers;
