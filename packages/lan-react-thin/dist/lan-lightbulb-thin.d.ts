import React from 'react';

export interface LanLightbulbThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbThin(props: LanLightbulbThinProps): React.ReactElement;
export default LanLightbulbThin;
