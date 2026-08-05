import React from 'react';

export interface LanColonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanColonRegular(props: LanColonRegularProps): React.ReactElement;
export default LanColonRegular;
