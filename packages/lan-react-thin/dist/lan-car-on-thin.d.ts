import React from 'react';

export interface LanCarOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarOnThin(props: LanCarOnThinProps): React.ReactElement;
export default LanCarOnThin;
