import React from 'react';

export interface LanFaceMaskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMaskRegular: React.FC<LanFaceMaskRegularProps>;
export default LanFaceMaskRegular;
