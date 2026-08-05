import React from 'react';

export interface LanLightbulbMessageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbMessageThin(props: LanLightbulbMessageThinProps): React.ReactElement;
export default LanLightbulbMessageThin;
