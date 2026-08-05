import React from 'react';

export interface LanThumbtackAngleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbtackAngleThin(props: LanThumbtackAngleThinProps): React.ReactElement;
export default LanThumbtackAngleThin;
