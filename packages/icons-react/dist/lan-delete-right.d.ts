import React from 'react';

export interface LanDeleteRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDeleteRight: React.FC<LanDeleteRightProps>;
export default LanDeleteRight;
