import React from 'react';

export interface LanChessBoardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessBoardRegular(props: LanChessBoardRegularProps): React.ReactElement;
export default LanChessBoardRegular;
