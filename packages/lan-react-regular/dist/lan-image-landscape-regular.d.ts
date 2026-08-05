import React from 'react';

export interface LanImageLandscapeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageLandscapeRegular(props: LanImageLandscapeRegularProps): React.ReactElement;
export default LanImageLandscapeRegular;
