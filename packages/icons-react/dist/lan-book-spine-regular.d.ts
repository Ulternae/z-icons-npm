import React from 'react';

export interface LanBookSpineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookSpineRegular: React.FC<LanBookSpineRegularProps>;
export default LanBookSpineRegular;
