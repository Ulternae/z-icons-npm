import React from 'react';

export interface LanQuotesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQuotes(props: LanQuotesProps): React.ReactElement;
export default LanQuotes;
