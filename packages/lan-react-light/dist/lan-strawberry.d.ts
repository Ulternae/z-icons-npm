import React from 'react';

export interface LanStrawberryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStrawberry(props: LanStrawberryProps): React.ReactElement;
export default LanStrawberry;
