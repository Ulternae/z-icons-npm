import React from 'react';

export interface LanThumbtackAngleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbtackAngleSolid(props: LanThumbtackAngleSolidProps): React.ReactElement;
export default LanThumbtackAngleSolid;
