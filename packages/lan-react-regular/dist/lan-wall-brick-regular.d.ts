import React from 'react';

export interface LanWallBrickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWallBrickRegular(props: LanWallBrickRegularProps): React.ReactElement;
export default LanWallBrickRegular;
