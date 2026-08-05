import React from 'react';

export interface LanSkiBootRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkiBootRegular(props: LanSkiBootRegularProps): React.ReactElement;
export default LanSkiBootRegular;
