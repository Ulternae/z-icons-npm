import React from 'react';

export interface LanGlobeSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeSnow(props: LanGlobeSnowProps): React.ReactElement;
export default LanGlobeSnow;
