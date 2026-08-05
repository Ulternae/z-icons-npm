import React from 'react';

export interface LanCrabRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrabRegular(props: LanCrabRegularProps): React.ReactElement;
export default LanCrabRegular;
