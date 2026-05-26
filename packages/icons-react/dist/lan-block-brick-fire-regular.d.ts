import React from 'react';

export interface LanBlockBrickFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockBrickFireRegular: React.FC<LanBlockBrickFireRegularProps>;
export default LanBlockBrickFireRegular;
