import React from 'react';

export interface LanListTreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListTreeRegular(props: LanListTreeRegularProps): React.ReactElement;
export default LanListTreeRegular;
