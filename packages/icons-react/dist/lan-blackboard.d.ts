import React from 'react';

export interface LanBlackboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlackboard: React.FC<LanBlackboardProps>;
export default LanBlackboard;
