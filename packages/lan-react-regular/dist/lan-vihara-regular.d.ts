import React from 'react';

export interface LanViharaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanViharaRegular(props: LanViharaRegularProps): React.ReactElement;
export default LanViharaRegular;
