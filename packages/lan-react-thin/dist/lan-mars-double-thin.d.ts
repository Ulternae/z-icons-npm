import React from 'react';

export interface LanMarsDoubleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsDoubleThin(props: LanMarsDoubleThinProps): React.ReactElement;
export default LanMarsDoubleThin;
