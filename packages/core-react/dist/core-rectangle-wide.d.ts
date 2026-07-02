import React from 'react';

export interface CoreRectangleWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleWide(props: CoreRectangleWideProps): React.ReactElement;
export default CoreRectangleWide;
