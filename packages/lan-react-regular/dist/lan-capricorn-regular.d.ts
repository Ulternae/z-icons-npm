import React from 'react';

export interface LanCapricornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCapricornRegular(props: LanCapricornRegularProps): React.ReactElement;
export default LanCapricornRegular;
