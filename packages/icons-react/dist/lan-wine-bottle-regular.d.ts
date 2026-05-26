import React from 'react';

export interface LanWineBottleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWineBottleRegular: React.FC<LanWineBottleRegularProps>;
export default LanWineBottleRegular;
