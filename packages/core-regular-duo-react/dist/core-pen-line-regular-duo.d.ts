import React from 'react';

export interface CorePenLineRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePenLineRegularDuo(props: CorePenLineRegularDuoProps): React.ReactElement;
export default CorePenLineRegularDuo;
