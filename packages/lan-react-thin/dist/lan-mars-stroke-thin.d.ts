import React from 'react';

export interface LanMarsStrokeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsStrokeThin(props: LanMarsStrokeThinProps): React.ReactElement;
export default LanMarsStrokeThin;
