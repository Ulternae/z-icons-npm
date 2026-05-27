import React from 'react';

export interface CoreBookmarkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBookmarkRegularDuo: React.FC<CoreBookmarkRegularDuoProps>;
export default CoreBookmarkRegularDuo;
