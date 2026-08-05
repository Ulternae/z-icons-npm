import React from 'react';

export interface LanFileMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMusicRegular(props: LanFileMusicRegularProps): React.ReactElement;
export default LanFileMusicRegular;
