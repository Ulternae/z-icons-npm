import React from 'react';

export interface LanPersonFallingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonFallingRegular(props: LanPersonFallingRegularProps): React.ReactElement;
export default LanPersonFallingRegular;
