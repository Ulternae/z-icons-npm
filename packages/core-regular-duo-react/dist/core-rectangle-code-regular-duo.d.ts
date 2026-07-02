import React from 'react';

export interface CoreRectangleCodeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleCodeRegularDuo(props: CoreRectangleCodeRegularDuoProps): React.ReactElement;
export default CoreRectangleCodeRegularDuo;
