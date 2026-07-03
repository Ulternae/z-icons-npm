import React from 'react';

export interface BruStickerMuleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruStickerMule(props: BruStickerMuleProps): React.ReactElement;
export default BruStickerMule;
