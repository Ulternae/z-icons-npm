import React from 'react';

export interface CoreQuotesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreQuotesSolid(props: CoreQuotesSolidProps): React.ReactElement;
export default CoreQuotesSolid;
