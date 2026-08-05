import React from 'react';

export interface LanChessQueenAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessQueenAltRegular(props: LanChessQueenAltRegularProps): React.ReactElement;
export default LanChessQueenAltRegular;
