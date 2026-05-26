import React from 'react';

export interface LanWineBottleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWineBottle: React.FC<LanWineBottleProps>;
export default LanWineBottle;
