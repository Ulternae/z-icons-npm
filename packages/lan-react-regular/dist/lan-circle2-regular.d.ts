import React from 'react';

export interface LanCircle2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle2Regular(props: LanCircle2RegularProps): React.ReactElement;
export default LanCircle2Regular;
