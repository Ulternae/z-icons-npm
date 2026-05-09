import React from 'react';

export interface MinaFrameProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFrame: React.FC<MinaFrameProps>;
export default MinaFrame;
