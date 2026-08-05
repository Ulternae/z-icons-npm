import React from 'react';

export interface LanTRexRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTRexRegular(props: LanTRexRegularProps): React.ReactElement;
export default LanTRexRegular;
