import React from 'react';

export interface LanBellRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellRegular(props: LanBellRegularProps): React.ReactElement;
export default LanBellRegular;
