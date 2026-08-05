import React from 'react';

export interface LanQuotesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQuotesThin(props: LanQuotesThinProps): React.ReactElement;
export default LanQuotesThin;
