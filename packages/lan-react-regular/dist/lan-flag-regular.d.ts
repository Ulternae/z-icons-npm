import React from 'react';

export interface LanFlagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagRegular(props: LanFlagRegularProps): React.ReactElement;
export default LanFlagRegular;
