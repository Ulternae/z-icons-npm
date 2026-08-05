import React from 'react';

export interface LanChessRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessRegular(props: LanChessRegularProps): React.ReactElement;
export default LanChessRegular;
