import React from 'react';

export interface LanTabletScreenButtonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTabletScreenButtonRegular(props: LanTabletScreenButtonRegularProps): React.ReactElement;
export default LanTabletScreenButtonRegular;
