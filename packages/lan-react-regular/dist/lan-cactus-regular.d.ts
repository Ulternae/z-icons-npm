import React from 'react';

export interface LanCactusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCactusRegular(props: LanCactusRegularProps): React.ReactElement;
export default LanCactusRegular;
