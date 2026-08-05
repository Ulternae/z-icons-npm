import React from 'react';

export interface LanRRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRRegular(props: LanRRegularProps): React.ReactElement;
export default LanRRegular;
