import React from 'react';

export interface LanGameBoardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGameBoardRegular(props: LanGameBoardRegularProps): React.ReactElement;
export default LanGameBoardRegular;
