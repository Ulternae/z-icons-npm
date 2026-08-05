import React from 'react';

export interface LanThumbtackAngleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbtackAngleRegular(props: LanThumbtackAngleRegularProps): React.ReactElement;
export default LanThumbtackAngleRegular;
