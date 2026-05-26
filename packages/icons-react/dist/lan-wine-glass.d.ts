import React from 'react';

export interface LanWineGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWineGlass: React.FC<LanWineGlassProps>;
export default LanWineGlass;
