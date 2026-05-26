import React from 'react';

export interface LanWineGlassRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWineGlassRegular: React.FC<LanWineGlassRegularProps>;
export default LanWineGlassRegular;
