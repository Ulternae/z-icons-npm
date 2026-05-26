import React from 'react';

export interface LanVolumeMuteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeMute: React.FC<LanVolumeMuteProps>;
export default LanVolumeMute;
