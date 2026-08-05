import React from 'react';

export interface CorePenRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePenRegularDuo(props: CorePenRegularDuoProps): React.ReactElement;
export default CorePenRegularDuo;
