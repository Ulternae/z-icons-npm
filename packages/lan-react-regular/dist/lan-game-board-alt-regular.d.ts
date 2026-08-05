import React from 'react';

export interface LanGameBoardAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGameBoardAltRegular(props: LanGameBoardAltRegularProps): React.ReactElement;
export default LanGameBoardAltRegular;
