import React from 'react';

export interface LanTentsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTentsRegular(props: LanTentsRegularProps): React.ReactElement;
export default LanTentsRegular;
