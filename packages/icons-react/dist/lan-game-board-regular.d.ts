import React from 'react';

export interface LanGameBoardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGameBoardRegular: React.FC<LanGameBoardRegularProps>;
export default LanGameBoardRegular;
