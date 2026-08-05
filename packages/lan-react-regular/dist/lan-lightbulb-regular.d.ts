import React from 'react';

export interface LanLightbulbRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbRegular(props: LanLightbulbRegularProps): React.ReactElement;
export default LanLightbulbRegular;
