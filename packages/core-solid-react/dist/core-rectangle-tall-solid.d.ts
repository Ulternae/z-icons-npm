import React from 'react';

export interface CoreRectangleTallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleTallSolid(props: CoreRectangleTallSolidProps): React.ReactElement;
export default CoreRectangleTallSolid;
