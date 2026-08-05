import React from 'react';

export interface LanEmptySetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEmptySetRegular(props: LanEmptySetRegularProps): React.ReactElement;
export default LanEmptySetRegular;
