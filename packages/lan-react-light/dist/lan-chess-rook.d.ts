import React from 'react';

export interface LanChessRookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessRook(props: LanChessRookProps): React.ReactElement;
export default LanChessRook;
