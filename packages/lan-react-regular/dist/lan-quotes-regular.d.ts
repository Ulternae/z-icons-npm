import React from 'react';

export interface LanQuotesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQuotesRegular(props: LanQuotesRegularProps): React.ReactElement;
export default LanQuotesRegular;
