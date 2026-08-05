import React from 'react';

export interface LanLightbulbOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbOnRegular(props: LanLightbulbOnRegularProps): React.ReactElement;
export default LanLightbulbOnRegular;
