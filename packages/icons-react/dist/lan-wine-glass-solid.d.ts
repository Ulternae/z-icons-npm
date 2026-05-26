import React from 'react';

export interface LanWineGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWineGlassSolid: React.FC<LanWineGlassSolidProps>;
export default LanWineGlassSolid;
