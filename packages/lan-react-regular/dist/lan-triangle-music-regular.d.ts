import React from 'react';

export interface LanTriangleMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTriangleMusicRegular(props: LanTriangleMusicRegularProps): React.ReactElement;
export default LanTriangleMusicRegular;
