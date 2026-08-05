import React from 'react';

export interface LanGlassWaterDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassWaterDroplet(props: LanGlassWaterDropletProps): React.ReactElement;
export default LanGlassWaterDroplet;
