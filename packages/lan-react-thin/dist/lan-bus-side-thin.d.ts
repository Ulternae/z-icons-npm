import React from 'react';

export interface LanBusSideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusSideThin(props: LanBusSideThinProps): React.ReactElement;
export default LanBusSideThin;
