import React from 'react';

export interface LanGlassCitrusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassCitrus: React.FC<LanGlassCitrusProps>;
export default LanGlassCitrus;
