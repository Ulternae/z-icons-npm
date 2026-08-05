import React from 'react';

export interface LanEscalatorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEscalatorRegular(props: LanEscalatorRegularProps): React.ReactElement;
export default LanEscalatorRegular;
