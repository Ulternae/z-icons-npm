import React from 'react';

export interface CoreEyeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreEyeRegularDuo(props: CoreEyeRegularDuoProps): React.ReactElement;
export default CoreEyeRegularDuo;
