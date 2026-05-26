import React from 'react';

export interface LanTractorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTractorRegular: React.FC<LanTractorRegularProps>;
export default LanTractorRegular;
