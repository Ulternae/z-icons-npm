import React from 'react';

export interface LanChessRookRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessRookRegular: React.FC<LanChessRookRegularProps>;
export default LanChessRookRegular;
