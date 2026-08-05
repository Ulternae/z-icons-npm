import React from 'react';

export interface CoreRectangleRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleRegularDuo(props: CoreRectangleRegularDuoProps): React.ReactElement;
export default CoreRectangleRegularDuo;
