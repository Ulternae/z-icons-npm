import React from 'react';

export interface LanCaduceusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaduceusRegular(props: LanCaduceusRegularProps): React.ReactElement;
export default LanCaduceusRegular;
