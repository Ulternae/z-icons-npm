import React from 'react';

export interface CoreRectangleTallRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleTallRegularDuo(props: CoreRectangleTallRegularDuoProps): React.ReactElement;
export default CoreRectangleTallRegularDuo;
