import React from 'react';

export interface LanArrowsTurnToDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsTurnToDots: React.FC<LanArrowsTurnToDotsProps>;
export default LanArrowsTurnToDots;
