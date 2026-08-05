import React from 'react';

export interface LanHeartSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartSquareRegular(props: LanHeartSquareRegularProps): React.ReactElement;
export default LanHeartSquareRegular;
