import React from 'react';

export interface LanAlmostEqualToProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlmostEqualTo: React.FC<LanAlmostEqualToProps>;
export default LanAlmostEqualTo;
