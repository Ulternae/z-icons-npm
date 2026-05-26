import React from 'react';

export interface LanFileVideoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileVideoRegular: React.FC<LanFileVideoRegularProps>;
export default LanFileVideoRegular;
