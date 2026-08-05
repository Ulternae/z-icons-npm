import React from 'react';

export interface LanInhalerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInhalerRegular(props: LanInhalerRegularProps): React.ReactElement;
export default LanInhalerRegular;
