import React from 'react';

export interface LanImageLandscapeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageLandscapeThin(props: LanImageLandscapeThinProps): React.ReactElement;
export default LanImageLandscapeThin;
