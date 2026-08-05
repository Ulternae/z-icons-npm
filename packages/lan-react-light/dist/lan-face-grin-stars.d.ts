import React from 'react';

export interface LanFaceGrinStarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinStars(props: LanFaceGrinStarsProps): React.ReactElement;
export default LanFaceGrinStars;
