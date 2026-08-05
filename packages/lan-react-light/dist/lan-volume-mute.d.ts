import React from 'react';

export interface LanVolumeMuteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeMute(props: LanVolumeMuteProps): React.ReactElement;
export default LanVolumeMute;
