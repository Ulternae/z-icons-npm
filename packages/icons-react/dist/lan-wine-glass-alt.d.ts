import React from 'react';

export interface LanWineGlassAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWineGlassAlt: React.FC<LanWineGlassAltProps>;
export default LanWineGlassAlt;
