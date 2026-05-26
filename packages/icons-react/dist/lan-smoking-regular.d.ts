import React from 'react';

export interface LanSmokingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSmokingRegular: React.FC<LanSmokingRegularProps>;
export default LanSmokingRegular;
