import React from 'react';

export interface LanRectangleBetaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleBetaRegular(props: LanRectangleBetaRegularProps): React.ReactElement;
export default LanRectangleBetaRegular;
