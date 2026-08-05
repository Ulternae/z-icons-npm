import React from 'react';

export interface LanBurritoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurrito(props: LanBurritoProps): React.ReactElement;
export default LanBurrito;
