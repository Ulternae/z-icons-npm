import React from 'react';

export interface LanTireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTireRegular(props: LanTireRegularProps): React.ReactElement;
export default LanTireRegular;
