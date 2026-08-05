import React from 'react';

export interface LanDeskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDeskRegular(props: LanDeskRegularProps): React.ReactElement;
export default LanDeskRegular;
