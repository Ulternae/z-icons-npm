import React from 'react';

export interface CoreWindRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWindRegularDuo(props: CoreWindRegularDuoProps): React.ReactElement;
export default CoreWindRegularDuo;
