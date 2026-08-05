import React from 'react';

export interface LanTableDiningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableDiningRegular(props: LanTableDiningRegularProps): React.ReactElement;
export default LanTableDiningRegular;
