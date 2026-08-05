import React from 'react';

export interface LanInfoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInfoRegular(props: LanInfoRegularProps): React.ReactElement;
export default LanInfoRegular;
