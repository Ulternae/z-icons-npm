import React from 'react';

export interface LanJeansRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJeansRegular(props: LanJeansRegularProps): React.ReactElement;
export default LanJeansRegular;
