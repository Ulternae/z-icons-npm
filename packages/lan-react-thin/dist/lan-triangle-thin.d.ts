import React from 'react';

export interface LanTriangleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTriangleThin(props: LanTriangleThinProps): React.ReactElement;
export default LanTriangleThin;
