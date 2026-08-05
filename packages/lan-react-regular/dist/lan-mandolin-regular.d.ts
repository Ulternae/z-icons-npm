import React from 'react';

export interface LanMandolinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMandolinRegular(props: LanMandolinRegularProps): React.ReactElement;
export default LanMandolinRegular;
