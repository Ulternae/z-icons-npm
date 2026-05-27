import React from 'react';

export interface NeoBookmarkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBookmarkRegularDuo: React.FC<NeoBookmarkRegularDuoProps>;
export default NeoBookmarkRegularDuo;
