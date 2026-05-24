import React from 'react';

export interface BruStickerMuleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruStickerMule: React.FC<BruStickerMuleProps>;
export default BruStickerMule;
