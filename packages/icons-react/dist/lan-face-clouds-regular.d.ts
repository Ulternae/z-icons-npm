import React from 'react';

export interface LanFaceCloudsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceCloudsRegular: React.FC<LanFaceCloudsRegularProps>;
export default LanFaceCloudsRegular;
