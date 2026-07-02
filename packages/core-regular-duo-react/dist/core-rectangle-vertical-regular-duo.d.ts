import React from 'react';

export interface CoreRectangleVerticalRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleVerticalRegularDuo(props: CoreRectangleVerticalRegularDuoProps): React.ReactElement;
export default CoreRectangleVerticalRegularDuo;
