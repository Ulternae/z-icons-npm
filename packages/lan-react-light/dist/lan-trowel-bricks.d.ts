import React from 'react';

export interface LanTrowelBricksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrowelBricks(props: LanTrowelBricksProps): React.ReactElement;
export default LanTrowelBricks;
