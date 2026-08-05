import React from 'react';

export interface LanColonSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanColonSignRegular(props: LanColonSignRegularProps): React.ReactElement;
export default LanColonSignRegular;
