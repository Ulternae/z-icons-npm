import React from 'react';

export interface LanCarSideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSideThin(props: LanCarSideThinProps): React.ReactElement;
export default LanCarSideThin;
