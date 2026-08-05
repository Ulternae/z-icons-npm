import React from 'react';

export interface LanCircle8Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle8(props: LanCircle8Props): React.ReactElement;
export default LanCircle8;
