import React from 'react';

export interface LanBookAtlasProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookAtlas: React.FC<LanBookAtlasProps>;
export default LanBookAtlas;
