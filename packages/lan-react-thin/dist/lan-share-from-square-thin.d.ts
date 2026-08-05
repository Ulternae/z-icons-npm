import React from 'react';

export interface LanShareFromSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShareFromSquareThin(props: LanShareFromSquareThinProps): React.ReactElement;
export default LanShareFromSquareThin;
