import React from 'react';

export interface LanWineBottleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWineBottleSolid: React.FC<LanWineBottleSolidProps>;
export default LanWineBottleSolid;
