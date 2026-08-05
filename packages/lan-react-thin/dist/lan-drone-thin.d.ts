import React from 'react';

export interface LanDroneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDroneThin(props: LanDroneThinProps): React.ReactElement;
export default LanDroneThin;
