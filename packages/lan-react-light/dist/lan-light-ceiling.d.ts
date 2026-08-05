import React from 'react';

export interface LanLightCeilingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightCeiling(props: LanLightCeilingProps): React.ReactElement;
export default LanLightCeiling;
