import React from 'react';

export interface CoreRectangleCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleCode(props: CoreRectangleCodeProps): React.ReactElement;
export default CoreRectangleCode;
