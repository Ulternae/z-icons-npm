import React from 'react';

export interface LanQuotesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQuotesSolid(props: LanQuotesSolidProps): React.ReactElement;
export default LanQuotesSolid;
