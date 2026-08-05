import React from 'react';

export interface LanBraRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBraRegular(props: LanBraRegularProps): React.ReactElement;
export default LanBraRegular;
