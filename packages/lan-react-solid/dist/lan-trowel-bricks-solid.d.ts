import React from 'react';

export interface LanTrowelBricksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrowelBricksSolid(props: LanTrowelBricksSolidProps): React.ReactElement;
export default LanTrowelBricksSolid;
