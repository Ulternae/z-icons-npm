import React from 'react';

export interface LanVenusDoubleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVenusDoubleThin(props: LanVenusDoubleThinProps): React.ReactElement;
export default LanVenusDoubleThin;
