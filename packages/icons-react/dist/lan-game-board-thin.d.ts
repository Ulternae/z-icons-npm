import React from 'react';

export interface LanGameBoardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGameBoardThin: React.FC<LanGameBoardThinProps>;
export default LanGameBoardThin;
