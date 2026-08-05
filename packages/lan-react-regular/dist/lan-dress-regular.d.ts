import React from 'react';

export interface LanDressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDressRegular(props: LanDressRegularProps): React.ReactElement;
export default LanDressRegular;
