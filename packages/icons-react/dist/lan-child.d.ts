import React from 'react';

export interface LanChildProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChild: React.FC<LanChildProps>;
export default LanChild;
