import React from 'react';

export interface LanSquareRubleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRubleRegular(props: LanSquareRubleRegularProps): React.ReactElement;
export default LanSquareRubleRegular;
