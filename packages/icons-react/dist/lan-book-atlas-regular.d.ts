import React from 'react';

export interface LanBookAtlasRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookAtlasRegular: React.FC<LanBookAtlasRegularProps>;
export default LanBookAtlasRegular;
