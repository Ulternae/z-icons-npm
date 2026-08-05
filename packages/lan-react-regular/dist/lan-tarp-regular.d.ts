import React from 'react';

export interface LanTarpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTarpRegular(props: LanTarpRegularProps): React.ReactElement;
export default LanTarpRegular;
