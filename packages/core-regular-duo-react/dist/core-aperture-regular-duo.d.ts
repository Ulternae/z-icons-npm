import React from 'react';

export interface CoreApertureRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreApertureRegularDuo(props: CoreApertureRegularDuoProps): React.ReactElement;
export default CoreApertureRegularDuo;
