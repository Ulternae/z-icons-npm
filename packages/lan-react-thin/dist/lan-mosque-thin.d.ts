import React from 'react';

export interface LanMosqueThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMosqueThin(props: LanMosqueThinProps): React.ReactElement;
export default LanMosqueThin;
