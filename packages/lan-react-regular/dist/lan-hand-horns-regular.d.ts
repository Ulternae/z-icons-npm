import React from 'react';

export interface LanHandHornsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHornsRegular(props: LanHandHornsRegularProps): React.ReactElement;
export default LanHandHornsRegular;
