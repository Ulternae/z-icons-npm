import React from 'react';

export interface CoreMinusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMinusRegularDuo(props: CoreMinusRegularDuoProps): React.ReactElement;
export default CoreMinusRegularDuo;
