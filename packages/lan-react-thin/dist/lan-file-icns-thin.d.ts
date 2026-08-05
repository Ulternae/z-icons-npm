import React from 'react';

export interface LanFileIcnsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileIcnsThin(props: LanFileIcnsThinProps): React.ReactElement;
export default LanFileIcnsThin;
