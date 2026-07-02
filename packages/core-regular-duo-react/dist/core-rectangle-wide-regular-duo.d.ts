import React from 'react';

export interface CoreRectangleWideRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleWideRegularDuo(props: CoreRectangleWideRegularDuoProps): React.ReactElement;
export default CoreRectangleWideRegularDuo;
