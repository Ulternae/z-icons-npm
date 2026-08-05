import React from 'react';

export interface LanMortarBoardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMortarBoardRegular(props: LanMortarBoardRegularProps): React.ReactElement;
export default LanMortarBoardRegular;
