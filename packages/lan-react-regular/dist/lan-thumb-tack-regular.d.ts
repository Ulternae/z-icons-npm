import React from 'react';

export interface LanThumbTackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbTackRegular(props: LanThumbTackRegularProps): React.ReactElement;
export default LanThumbTackRegular;
