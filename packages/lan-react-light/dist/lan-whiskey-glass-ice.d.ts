import React from 'react';

export interface LanWhiskeyGlassIceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWhiskeyGlassIce(props: LanWhiskeyGlassIceProps): React.ReactElement;
export default LanWhiskeyGlassIce;
