import React from 'react';

export interface LanCircle1RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle1Regular(props: LanCircle1RegularProps): React.ReactElement;
export default LanCircle1Regular;
