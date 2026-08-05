import React from 'react';

export interface LanHorseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseRegular(props: LanHorseRegularProps): React.ReactElement;
export default LanHorseRegular;
