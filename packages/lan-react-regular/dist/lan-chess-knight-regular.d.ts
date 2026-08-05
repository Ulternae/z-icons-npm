import React from 'react';

export interface LanChessKnightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKnightRegular(props: LanChessKnightRegularProps): React.ReactElement;
export default LanChessKnightRegular;
