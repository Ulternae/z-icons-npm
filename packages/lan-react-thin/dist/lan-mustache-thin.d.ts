import React from 'react';

export interface LanMustacheThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMustacheThin(props: LanMustacheThinProps): React.ReactElement;
export default LanMustacheThin;
