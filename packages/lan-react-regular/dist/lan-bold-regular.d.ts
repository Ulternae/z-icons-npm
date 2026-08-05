import React from 'react';

export interface LanBoldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoldRegular(props: LanBoldRegularProps): React.ReactElement;
export default LanBoldRegular;
