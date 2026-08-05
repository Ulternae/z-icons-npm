import React from 'react';

export interface LanSwordsLaserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordsLaser(props: LanSwordsLaserProps): React.ReactElement;
export default LanSwordsLaser;
