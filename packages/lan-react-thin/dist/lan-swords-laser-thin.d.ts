import React from 'react';

export interface LanSwordsLaserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordsLaserThin(props: LanSwordsLaserThinProps): React.ReactElement;
export default LanSwordsLaserThin;
