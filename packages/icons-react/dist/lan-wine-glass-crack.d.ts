import React from 'react';

export interface LanWineGlassCrackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWineGlassCrack: React.FC<LanWineGlassCrackProps>;
export default LanWineGlassCrack;
