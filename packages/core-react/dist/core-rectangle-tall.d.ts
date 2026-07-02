import React from 'react';

export interface CoreRectangleTallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleTall(props: CoreRectangleTallProps): React.ReactElement;
export default CoreRectangleTall;
