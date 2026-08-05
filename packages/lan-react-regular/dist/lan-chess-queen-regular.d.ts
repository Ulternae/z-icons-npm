import React from 'react';

export interface LanChessQueenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessQueenRegular(props: LanChessQueenRegularProps): React.ReactElement;
export default LanChessQueenRegular;
