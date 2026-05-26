import React from 'react';

export interface LanStroopwafelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStroopwafelRegular: React.FC<LanStroopwafelRegularProps>;
export default LanStroopwafelRegular;
