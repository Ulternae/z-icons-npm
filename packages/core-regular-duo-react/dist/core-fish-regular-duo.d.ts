import React from 'react';

export interface CoreFishRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFishRegularDuo(props: CoreFishRegularDuoProps): React.ReactElement;
export default CoreFishRegularDuo;
