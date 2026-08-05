import React from 'react';

export interface LanLightbulbGearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbGear(props: LanLightbulbGearProps): React.ReactElement;
export default LanLightbulbGear;
