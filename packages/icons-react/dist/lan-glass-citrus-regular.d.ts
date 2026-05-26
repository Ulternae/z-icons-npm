import React from 'react';

export interface LanGlassCitrusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassCitrusRegular: React.FC<LanGlassCitrusRegularProps>;
export default LanGlassCitrusRegular;
