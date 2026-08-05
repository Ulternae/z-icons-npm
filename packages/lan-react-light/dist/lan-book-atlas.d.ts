import React from 'react';

export interface LanBookAtlasProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookAtlas(props: LanBookAtlasProps): React.ReactElement;
export default LanBookAtlas;
