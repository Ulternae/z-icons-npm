import React from 'react';

export interface LanTextHeightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextHeightRegular: React.FC<LanTextHeightRegularProps>;
export default LanTextHeightRegular;
