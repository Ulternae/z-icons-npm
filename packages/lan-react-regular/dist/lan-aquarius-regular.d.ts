import React from 'react';

export interface LanAquariusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAquariusRegular(props: LanAquariusRegularProps): React.ReactElement;
export default LanAquariusRegular;
