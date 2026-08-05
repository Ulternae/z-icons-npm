import React from 'react';

export interface LanSwordsLaserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordsLaserSolid(props: LanSwordsLaserSolidProps): React.ReactElement;
export default LanSwordsLaserSolid;
