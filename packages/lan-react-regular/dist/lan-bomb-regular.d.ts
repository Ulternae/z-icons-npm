import React from 'react';

export interface LanBombRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBombRegular(props: LanBombRegularProps): React.ReactElement;
export default LanBombRegular;
