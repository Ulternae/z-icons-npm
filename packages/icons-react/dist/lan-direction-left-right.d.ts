import React from 'react';

export interface LanDirectionLeftRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDirectionLeftRight: React.FC<LanDirectionLeftRightProps>;
export default LanDirectionLeftRight;
