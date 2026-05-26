import React from 'react';

export interface LanShirtLongSleeveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtLongSleeveRegular: React.FC<LanShirtLongSleeveRegularProps>;
export default LanShirtLongSleeveRegular;
