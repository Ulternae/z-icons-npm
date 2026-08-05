import React from 'react';

export interface LanBlanketRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlanketRegular(props: LanBlanketRegularProps): React.ReactElement;
export default LanBlanketRegular;
