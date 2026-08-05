import React from 'react';

export interface LanCheckCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckCircleRegular(props: LanCheckCircleRegularProps): React.ReactElement;
export default LanCheckCircleRegular;
