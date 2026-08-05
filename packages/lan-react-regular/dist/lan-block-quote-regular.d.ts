import React from 'react';

export interface LanBlockQuoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockQuoteRegular(props: LanBlockQuoteRegularProps): React.ReactElement;
export default LanBlockQuoteRegular;
