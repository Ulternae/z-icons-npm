import React from 'react';

export interface LanLightbulbOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbOn(props: LanLightbulbOnProps): React.ReactElement;
export default LanLightbulbOn;
