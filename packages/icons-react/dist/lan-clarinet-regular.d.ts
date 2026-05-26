import React from 'react';

export interface LanClarinetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClarinetRegular: React.FC<LanClarinetRegularProps>;
export default LanClarinetRegular;
