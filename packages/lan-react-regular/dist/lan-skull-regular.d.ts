import React from 'react';

export interface LanSkullRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkullRegular(props: LanSkullRegularProps): React.ReactElement;
export default LanSkullRegular;
