import React from 'react';

export interface LanViharaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanViharaThin(props: LanViharaThinProps): React.ReactElement;
export default LanViharaThin;
