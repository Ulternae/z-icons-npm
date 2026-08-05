import React from 'react';

export interface LanBRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBRegular(props: LanBRegularProps): React.ReactElement;
export default LanBRegular;
