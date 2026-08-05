import React from 'react';

export interface LanBorderTopLeftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderTopLeftRegular(props: LanBorderTopLeftRegularProps): React.ReactElement;
export default LanBorderTopLeftRegular;
