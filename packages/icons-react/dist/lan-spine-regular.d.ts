import React from 'react';

export interface LanSpineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpineRegular: React.FC<LanSpineRegularProps>;
export default LanSpineRegular;
