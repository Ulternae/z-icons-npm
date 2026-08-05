import React from 'react';

export interface LanFilmsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilmsRegular(props: LanFilmsRegularProps): React.ReactElement;
export default LanFilmsRegular;
