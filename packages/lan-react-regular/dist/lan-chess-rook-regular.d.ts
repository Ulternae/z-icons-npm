import React from 'react';

export interface LanChessRookRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessRookRegular(props: LanChessRookRegularProps): React.ReactElement;
export default LanChessRookRegular;
