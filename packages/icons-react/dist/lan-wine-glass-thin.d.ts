import React from 'react';

export interface LanWineGlassThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWineGlassThin: React.FC<LanWineGlassThinProps>;
export default LanWineGlassThin;
