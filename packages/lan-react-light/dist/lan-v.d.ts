import React from 'react';

export interface LanVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanV(props: LanVProps): React.ReactElement;
export default LanV;
