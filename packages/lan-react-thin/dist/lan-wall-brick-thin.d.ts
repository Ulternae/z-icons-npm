import React from 'react';

export interface LanWallBrickThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWallBrickThin(props: LanWallBrickThinProps): React.ReactElement;
export default LanWallBrickThin;
