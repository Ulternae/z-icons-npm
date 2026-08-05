import React from 'react';

export interface LanCircle4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle4(props: LanCircle4Props): React.ReactElement;
export default LanCircle4;
