import React from 'react';

export interface LanMattressPillowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMattressPillowRegular: React.FC<LanMattressPillowRegularProps>;
export default LanMattressPillowRegular;
