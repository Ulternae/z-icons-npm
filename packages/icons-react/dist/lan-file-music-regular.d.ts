import React from 'react';

export interface LanFileMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMusicRegular: React.FC<LanFileMusicRegularProps>;
export default LanFileMusicRegular;
