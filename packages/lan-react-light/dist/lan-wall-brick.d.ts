import React from 'react';

export interface LanWallBrickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWallBrick(props: LanWallBrickProps): React.ReactElement;
export default LanWallBrick;
