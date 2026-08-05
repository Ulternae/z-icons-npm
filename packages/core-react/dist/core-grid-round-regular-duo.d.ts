import React from 'react';

export interface CoreGridRoundRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGridRoundRegularDuo(props: CoreGridRoundRegularDuoProps): React.ReactElement;
export default CoreGridRoundRegularDuo;
