import React from 'react';

export interface LanBookAtlasRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookAtlasRegular(props: LanBookAtlasRegularProps): React.ReactElement;
export default LanBookAtlasRegular;
