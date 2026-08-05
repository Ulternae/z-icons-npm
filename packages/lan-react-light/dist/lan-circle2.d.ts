import React from 'react';

export interface LanCircle2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle2(props: LanCircle2Props): React.ReactElement;
export default LanCircle2;
