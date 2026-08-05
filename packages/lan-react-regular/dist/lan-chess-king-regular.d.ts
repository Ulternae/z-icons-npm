import React from 'react';

export interface LanChessKingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKingRegular(props: LanChessKingRegularProps): React.ReactElement;
export default LanChessKingRegular;
