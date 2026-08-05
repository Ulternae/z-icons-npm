import React from 'react';

export interface LanAcornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAcornRegular(props: LanAcornRegularProps): React.ReactElement;
export default LanAcornRegular;
