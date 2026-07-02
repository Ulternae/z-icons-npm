import React from 'react';

export interface CorePoopRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePoopRegularDuo(props: CorePoopRegularDuoProps): React.ReactElement;
export default CorePoopRegularDuo;
