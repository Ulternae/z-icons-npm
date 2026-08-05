import React from 'react';

export interface LanImageLandscapeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageLandscape(props: LanImageLandscapeProps): React.ReactElement;
export default LanImageLandscape;
