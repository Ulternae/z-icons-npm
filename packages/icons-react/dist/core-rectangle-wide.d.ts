import React from 'react';

export interface CoreRectangleWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleWide: React.FC<CoreRectangleWideProps>;
export default CoreRectangleWide;
