import React from 'react';

export interface LanStrawberryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStrawberryThin(props: LanStrawberryThinProps): React.ReactElement;
export default LanStrawberryThin;
