import React from 'react';

export interface LanSquareARegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareARegular(props: LanSquareARegularProps): React.ReactElement;
export default LanSquareARegular;
