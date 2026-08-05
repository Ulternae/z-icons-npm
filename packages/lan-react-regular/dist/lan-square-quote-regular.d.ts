import React from 'react';

export interface LanSquareQuoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareQuoteRegular(props: LanSquareQuoteRegularProps): React.ReactElement;
export default LanSquareQuoteRegular;
