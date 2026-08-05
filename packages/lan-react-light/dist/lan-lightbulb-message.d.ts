import React from 'react';

export interface LanLightbulbMessageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbMessage(props: LanLightbulbMessageProps): React.ReactElement;
export default LanLightbulbMessage;
