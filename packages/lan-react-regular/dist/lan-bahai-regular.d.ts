import React from 'react';

export interface LanBahaiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBahaiRegular(props: LanBahaiRegularProps): React.ReactElement;
export default LanBahaiRegular;
