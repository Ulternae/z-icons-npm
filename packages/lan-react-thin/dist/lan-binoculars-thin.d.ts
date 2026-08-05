import React from 'react';

export interface LanBinocularsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinocularsThin(props: LanBinocularsThinProps): React.ReactElement;
export default LanBinocularsThin;
