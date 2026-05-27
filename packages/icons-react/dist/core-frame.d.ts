import React from 'react';

export interface CoreFrameProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFrame: React.FC<CoreFrameProps>;
export default CoreFrame;
