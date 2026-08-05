import React from 'react';

export interface LanCircle2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle2Thin(props: LanCircle2ThinProps): React.ReactElement;
export default LanCircle2Thin;
