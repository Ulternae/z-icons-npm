import React from 'react';

export interface LanChessBoardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessBoardRegular: React.FC<LanChessBoardRegularProps>;
export default LanChessBoardRegular;
