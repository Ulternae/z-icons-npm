import React from 'react';

export interface LanJackOLanternSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJackOLanternSolid(props: LanJackOLanternSolidProps): React.ReactElement;
export default LanJackOLanternSolid;
