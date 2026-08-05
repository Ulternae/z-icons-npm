import React from 'react';

export interface LanListUlRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListUlRegular(props: LanListUlRegularProps): React.ReactElement;
export default LanListUlRegular;
