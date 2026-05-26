import React from 'react';

export interface LanChessRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessRegular: React.FC<LanChessRegularProps>;
export default LanChessRegular;
