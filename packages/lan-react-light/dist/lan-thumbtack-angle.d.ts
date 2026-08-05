import React from 'react';

export interface LanThumbtackAngleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbtackAngle(props: LanThumbtackAngleProps): React.ReactElement;
export default LanThumbtackAngle;
