import React from 'react';

export interface LanBicycleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBicycleThin(props: LanBicycleThinProps): React.ReactElement;
export default LanBicycleThin;
