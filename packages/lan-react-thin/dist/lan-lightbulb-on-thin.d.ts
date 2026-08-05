import React from 'react';

export interface LanLightbulbOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbOnThin(props: LanLightbulbOnThinProps): React.ReactElement;
export default LanLightbulbOnThin;
