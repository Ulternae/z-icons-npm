import React from 'react';

export interface CoreQuotesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreQuotes(props: CoreQuotesProps): React.ReactElement;
export default CoreQuotes;
