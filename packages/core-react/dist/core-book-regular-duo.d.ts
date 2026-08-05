import React from 'react';

export interface CoreBookRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBookRegularDuo(props: CoreBookRegularDuoProps): React.ReactElement;
export default CoreBookRegularDuo;
