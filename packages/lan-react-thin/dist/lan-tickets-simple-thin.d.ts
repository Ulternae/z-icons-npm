import React from 'react';

export interface LanTicketsSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketsSimpleThin(props: LanTicketsSimpleThinProps): React.ReactElement;
export default LanTicketsSimpleThin;
