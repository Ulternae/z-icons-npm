import React from 'react';

export interface LanTicketsSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketsSimple(props: LanTicketsSimpleProps): React.ReactElement;
export default LanTicketsSimple;
