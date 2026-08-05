import React from 'react';

export interface LanLightbulbMessageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbMessageRegular(props: LanLightbulbMessageRegularProps): React.ReactElement;
export default LanLightbulbMessageRegular;
