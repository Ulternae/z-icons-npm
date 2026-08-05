import React from 'react';

export interface LanBellsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellsRegular(props: LanBellsRegularProps): React.ReactElement;
export default LanBellsRegular;
