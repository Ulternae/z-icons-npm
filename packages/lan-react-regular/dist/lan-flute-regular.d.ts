import React from 'react';

export interface LanFluteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFluteRegular(props: LanFluteRegularProps): React.ReactElement;
export default LanFluteRegular;
