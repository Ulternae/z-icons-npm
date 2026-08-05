import React from 'react';

export interface LanRectangleSdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleSdRegular(props: LanRectangleSdRegularProps): React.ReactElement;
export default LanRectangleSdRegular;
