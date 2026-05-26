import React from 'react';

export interface LanGhostRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGhostRegular: React.FC<LanGhostRegularProps>;
export default LanGhostRegular;
