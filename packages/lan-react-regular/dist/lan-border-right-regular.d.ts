import React from 'react';

export interface LanBorderRightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderRightRegular(props: LanBorderRightRegularProps): React.ReactElement;
export default LanBorderRightRegular;
