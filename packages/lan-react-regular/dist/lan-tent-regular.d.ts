import React from 'react';

export interface LanTentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTentRegular(props: LanTentRegularProps): React.ReactElement;
export default LanTentRegular;
