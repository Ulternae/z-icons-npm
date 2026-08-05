import React from 'react';

export interface LanHurricaneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHurricaneRegular(props: LanHurricaneRegularProps): React.ReactElement;
export default LanHurricaneRegular;
