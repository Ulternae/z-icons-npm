import React from 'react';

export interface CoreFrameRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFrameRegularDuo: React.FC<CoreFrameRegularDuoProps>;
export default CoreFrameRegularDuo;
