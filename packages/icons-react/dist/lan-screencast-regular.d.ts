import React from 'react';

export interface LanScreencastRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScreencastRegular: React.FC<LanScreencastRegularProps>;
export default LanScreencastRegular;
