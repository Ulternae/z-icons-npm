import React from 'react';

export interface LanTicketsSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketsSimpleRegular(props: LanTicketsSimpleRegularProps): React.ReactElement;
export default LanTicketsSimpleRegular;
